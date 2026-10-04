// Save records contain extensible, game-defined fields preserved during editing.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SaveRecord = any;
type SaveDocument = import("./codec.ts").SaveDocument;
type EditorElement = HTMLElement &
  Pick<HTMLInputElement, "value" | "disabled" | "files" | "checkValidity">;
const errorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : String(error);
import EastwardCodec from "./codec.ts";

export function initializeEditor(root: HTMLElement): () => void {
  const controller = new AbortController();
  let disposed = false;
  let opening = 0;
  let revision = 0;
  const $ = (selector: string) => {
      const element = root.querySelector<HTMLElement>(selector);
      if (!element) throw new Error(`Missing editor element: ${selector}`);
      return element as EditorElement;
    },
    clone = <T>(value: T): T => JSON.parse(JSON.stringify(value));
  let doc: SaveDocument | null = null,
    original: SaveDocument | null = null,
    fileName = "save.pack_save",
    dirty = false;
  const pendingItems = new Map<string, string>();
  const recordData = () =>
      Object.values(doc?.content?.data || {})
        .map((record: SaveRecord) => record?.data)
        .filter((data) => data && typeof data === "object"),
    savedItemName = (id: string, item: SaveRecord) => {
      return typeof item?.id === "string" && item.id.trim() ? item.id : id;
    },
    isToolStateMap = (value: SaveRecord) =>
      value &&
      typeof value === "object" &&
      !Array.isArray(value) &&
      Object.values(value).some(
        (state: SaveRecord) =>
          state && typeof state === "object" && Number.isFinite(state.level),
      ),
    toolStateMaps = () => {
      const found: SaveRecord[] = [];
      const visit = (value: SaveRecord, seen = new Set<SaveRecord>()) => {
        if (!value || typeof value !== "object" || seen.has(value)) return;
        seen.add(value);
        for (const [key, child] of Object.entries(value)) {
          if (
            /(?:weapon|tool)_states?(?:_|$)/i.test(key) &&
            isToolStateMap(child)
          )
            found.push(child);
          else if (child && typeof child === "object") visit(child, seen);
        }
      };
      recordData().forEach((record) => visit(record));
      return [...new Set(found)];
    },
    inventoryMaps = () => [
      ...new Set(
        recordData().flatMap((record) => {
          const found: SaveRecord[] = [];
          const visit = (value: SaveRecord, seen = new Set<SaveRecord>()) => {
            if (!value || typeof value !== "object" || seen.has(value)) return;
            seen.add(value);
            if (
              value.inventory?.entries &&
              typeof value.inventory.entries === "object"
            )
              found.push(value.inventory.entries);
            Object.values(value).forEach((child) => visit(child, seen));
          };
          visit(record);
          return found;
        }),
      ),
    ],
    questGroups = () => {
      const data = doc?.content?.data?.["quest{version=0}"]?.data;
      return Array.isArray(data)
        ? data.filter(
            (group) =>
              group?.state?.states && !Array.isArray(group.state.states),
          )
        : [];
    };
  const status = (s: string, type = "ok") => {
    if (disposed) return;
    const message = $("#status");
    message.textContent = s;
    message.dataset.type = type;
    message.hidden = false;
  };
  const players = () => {
      const preferred = ["player{version=0}", "common_farm{version=0}"]
        .map((k) => doc?.content?.data?.[k]?.data)
        .filter(Boolean);
      return preferred.length
        ? preferred
        : recordData().filter((data) => data.stat || data.inventory);
    },
    player = () => players().find((p) => p?.stat && p?.global_flags) ?? players()[0];

  function saveBlob(
    data: BlobPart,
    name: string,
    type = "application/octet-stream",
  ) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(
      new Blob([data], {
        type,
      }),
    );
    a.download = name;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }

  function number(id: string) {
    const el = $(id),
      n = Number(el.value);
    if (!el.checkValidity() || !Number.isInteger(n))
      throw Error(`Check ${el.parentElement?.firstChild?.textContent ?? id}.`);
    return n;
  }

  function setDirty(value: boolean) {
    revision++;
    dirty = value;
    $("#changeState").textContent = value
      ? "Changes applied — ready to download"
      : "No unapplied changes";
    $("#changeState").classList.toggle("dirty", value);
  }

  function fillPlayer() {
    const p = player();
    const supported = Boolean(p?.stat && p?.global_flags);
    $("#applyPlayer").disabled = !supported;
    root
      .querySelectorAll<EditorElement>("#playerPanel input")
      .forEach((input) => {
        input.disabled = !supported;
        input.value = "";
      });
    if (!supported) return;
    const s = p.stat,
      f = p.global_flags;
    $("#day").value = s.current_day ?? 1;
    $("#time").value = s.current_time ?? 0;
    $("#money").value = s.money ?? 0;
    $("#coin").value = s.coin ?? 0;
    $("#stamina").value = s.stamina ?? 0;
    $("#maxStamina").value = s.max_stamina ?? 1;
    $("#mine").value = f.max_mine_level ?? 0;
    $("#cooking").value = s.cook_level ?? 0;
  }

  function fillTools() {
    const host = $("#toolList"),
      maps = toolStateMaps(),
      ids = [
        ...new Set(
          maps.flatMap((states) =>
            Object.keys(states).filter((id) =>
              Number.isFinite(states[id]?.level),
            ),
          ),
        ),
      ].sort((a, b) => a.localeCompare(b));
    host.replaceChildren();
    for (const id of ids) {
      const level = maps.find((states) => Number.isFinite(states[id]?.level))?.[
        id
      ].level;
      const label = document.createElement("label");
      label.textContent = id;
      const input = document.createElement("input");
      input.dataset.tool = id;
      input.type = "number";
      input.min = "0";
      input.max = "10";
      input.step = "1";
      input.required = true;
      input.value = String(level);
      label.append(input);
      host.append(label);
    }
  }

  function fillQuests() {
    const host = $("#quests"),
      active = questGroups()
        .flatMap((group) =>
          Object.entries(group.state.states)
            .filter(([, state]) => state === "active")
            .map(([id]) => ({ group, id, label: `${group.name}.${id}` })),
        )
        .sort((a, b) => a.label.localeCompare(b.label));
    host.replaceChildren();
    $("#questCount").textContent =
      `${active.length} active quest state${active.length === 1 ? "" : "s"}`;
    for (const quest of active) {
      const tr = document.createElement("tr"),
        selectCell = document.createElement("td"),
        nameCell = document.createElement("td"),
        checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.setAttribute("aria-label", `Complete ${quest.label}`);
      checkbox.dataset.questGroup = String(questGroups().indexOf(quest.group));
      checkbox.dataset.questId = quest.id;
      nameCell.textContent = quest.label;
      selectCell.append(checkbox);
      tr.append(selectCell, nameCell);
      host.append(tr);
    }
  }

  function fillItems(query = "") {
    const host = $("#items"),
      maps = inventoryMaps(),
      ids = [...new Set(maps.flatMap((items) => Object.keys(items)))],
      items = Object.fromEntries(
        ids.map((id) => [id, maps.find((entries) => entries[id])?.[id]]),
      );
    host.replaceChildren();
    const needle = query.trim().toLowerCase(),
      visible = Object.entries(items)
        .map(([id, item]) => ({ id, item, name: savedItemName(id, item) }))
        .filter(
          ({ id, name }) =>
            id.toLowerCase().includes(needle) ||
            name.toLowerCase().includes(needle),
        )
        .sort((a, b) => a.name.localeCompare(b.name));
    $("#itemCount").textContent =
      `${visible.length} item${visible.length === 1 ? "" : "s"}`;
    for (const { id, item, name } of visible) {
      const tr = document.createElement("tr"),
        a = document.createElement("td"),
        b = document.createElement("td"),
        input = document.createElement("input");
      a.textContent = name;
      if (name !== id) a.title = id;
      input.type = "number";
      input.min = "0";
      input.step = "1";
      input.required = true;
      input.value = pendingItems.get(id) ?? String(item.count ?? 0);
      input.oninput = () => pendingItems.set(id, input.value);
      input.dataset.item = id;
      input.setAttribute("aria-label", `Quantity for ${name}`);
      b.append(input);
      tr.append(a, b);
      host.append(tr);
    }
  }

  function refresh() {
    fillPlayer();
    fillTools();
    fillQuests();
    fillItems($("#search").value);
  }
  async function openFile(file: File) {
    const request = ++opening;
    try {
      if (!file.name.toLowerCase().endsWith(".pack_save"))
        throw Error("Choose a .pack_save file.");
      status("Decoding and checking save…", "wait");
      const bytes = new Uint8Array(await file.arrayBuffer());
      const decoded = await EastwardCodec.decodeSave(bytes);
      if (disposed || request !== opening) return;
      const previous = doc;
      const previousPendingItems = new Map(pendingItems);
      pendingItems.clear();
      doc = decoded;
      try {
        if (
          !player() &&
          !toolStateMaps().length &&
          !inventoryMaps().length &&
          !questGroups().length
        ) {
          throw Error(
            "This save does not contain supported Eastward editor data.",
          );
        }
        refresh();
      } catch (error) {
        doc = previous;
        for (const [id, value] of previousPendingItems) pendingItems.set(id, value);
        if (previous) refresh();
        throw error;
      }
      original = clone(doc);
      fileName = file.name;
      $("#workspace").classList.remove("hidden");
      $("#drop").classList.add("hidden");
      $(".filename").textContent = file.name;
      setDirty(false);
      status(`Loaded ${file.name}. Choose an edit section.`);
    } catch (e) {
      if (!disposed && request === opening) status(errorMessage(e), "error");
    }
  }
  const drop = $("#drop"),
    input = $("#file");
  drop.onclick = (event) => {
    if (event.target !== input) input.click();
  };
  drop.onkeydown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      input.click();
    }
  };
  input.onchange = () => {
    const file = input.files?.[0];
    input.value = "";
    if (file) void openFile(file);
  };
  ["dragenter", "dragover"].forEach((x) =>
    drop.addEventListener(
      x,
      (e) => {
        e.preventDefault();
        drop.classList.add("drag");
      },
      { signal: controller.signal },
    ),
  );
  ["dragleave", "drop"].forEach((x) =>
    drop.addEventListener(
      x,
      (e) => {
        e.preventDefault();
        drop.classList.remove("drag");
      },
      { signal: controller.signal },
    ),
  );
  drop.ondrop = (e) => {
    const file = e.dataTransfer?.files[0];
    if (file) void openFile(file);
  };
  $("#changeFile").onclick = () => {
    input.value = "";
    input.click();
  };
  const titles: Record<string, [string, string]> = {
    player: ["COMMON VALUES", "Player & Farm"],
    tools: ["UPGRADE LEVELS", "Tools"],
    quests: ["ACTIVE STATES", "Quests"],
    inventory: ["ITEM QUANTITIES", "Inventory"],
  };
  root.querySelectorAll<EditorElement>(".tab").forEach(
    (tab) =>
      (tab.onclick = () => {
        root.querySelectorAll<EditorElement>(".tab").forEach((x) => {
          const active = x === tab;
          x.classList.toggle("active", active);
          x.setAttribute("aria-selected", String(active));
        });
        root
          .querySelectorAll<EditorElement>(".panel")
          .forEach((x) => x.classList.add("hidden"));
        $("#" + tab.dataset.tab + "Panel").classList.remove("hidden");
        $(".inventory-search").classList.toggle(
          "hidden",
          tab.dataset.tab !== "inventory",
        );
        [$("#sectionLabel").textContent, $("#sectionTitle").textContent] =
          titles[tab.dataset.tab ?? "player"];
      }),
  );
  $("#applyPlayer").onclick = () => {
    try {
      if (!doc) throw Error("Open a save file first.");
      const v = {
        day: number("#day"),
        time: number("#time"),
        money: number("#money"),
        coin: number("#coin"),
        stamina: number("#stamina"),
        max: number("#maxStamina"),
        mine: number("#mine"),
        cook: number("#cooking"),
      };
      if (v.stamina > v.max)
        throw Error("Stamina cannot exceed maximum stamina.");
      for (const p of players().filter((p) => p.stat && p.global_flags)) {
        Object.assign(p.stat, {
          current_day: v.day,
          current_time: v.time,
          money: v.money,
          coin: v.coin,
          stamina: v.stamina,
          max_stamina: v.max,
          cook_level: v.cook,
        });
        p.global_flags.current_day = v.day;
        p.global_flags.max_mine_level = v.mine;
        if (p.farm_life_diary) p.farm_life_diary.day = v.day;
      }
      if (doc.content.info?.playerData)
        doc.content.info.playerData.current_day = v.day;
      setDirty(true);
      status("Player changes applied.");
    } catch (e) {
      status(errorMessage(e), "error");
    }
  };
  $("#applyTools").onclick = () => {
    try {
      const values: Record<string, number> = {};
      root.querySelectorAll<EditorElement>("[data-tool]").forEach((x) => {
        if (!x.checkValidity()) throw Error("Check tool levels.");
        values[x.dataset.tool!] = Number(x.value);
      });
      for (const states of toolStateMaps())
        for (const [id, level] of Object.entries(values))
          if (states[id] && Number.isFinite(states[id].level))
            states[id].level = level;
      setDirty(true);
      status("Tool changes applied.");
    } catch (e) {
      status(errorMessage(e), "error");
    }
  };
  $("#applyQuests").onclick = () => {
    try {
      const selected = [
        ...root.querySelectorAll<EditorElement>("[data-quest-id]:checked"),
      ];
      if (!selected.length)
        throw Error("Select at least one active quest state.");
      const updates = selected.map((input) => {
        const group = questGroups()[Number(input.dataset.questGroup)];
        const id = input.dataset.questId!;
        if (group?.state?.states?.[id] !== "active")
          throw Error(`Quest state ${id} is no longer active.`);
        return { group, id };
      });
      for (const { group, id } of updates) group.state.states[id] = "finished";
      fillQuests();
      setDirty(true);
      status(
        `${selected.length} quest state${selected.length === 1 ? "" : "s"} marked finished.`,
      );
    } catch (e) {
      status(errorMessage(e), "error");
    }
  };
  $("#search").oninput = (e) => fillItems((e.target as HTMLInputElement).value);
  $("#applyItems").onclick = () => {
    try {
      const values: Record<string, number> = {};
      root.querySelectorAll<EditorElement>("[data-item]").forEach((x) => {
        if (!x.checkValidity()) throw Error(`Check ${x.dataset.item}.`);
        values[x.dataset.item!] = Number(x.value);
      });
      for (const items of inventoryMaps())
        for (const [id, count] of Object.entries(values))
          if (items[id] && Number.isFinite(items[id].count))
            items[id].count = count;
      for (const id of Object.keys(values)) pendingItems.delete(id);
      setDirty(true);
      status("Visible inventory quantities applied.");
    } catch (e) {
      status(errorMessage(e), "error");
    }
  };
  $("#undo").onclick = () => {
    if (original) {
      pendingItems.clear();
      doc = clone(original);
      refresh();
      setDirty(false);
      status("All edits undone.");
    }
  };
  $("#downloadSave").onclick = async () => {
    try {
      if (!doc) throw Error("Open a save file first.");
      const button = $("#downloadSave");
      if (button.disabled) return;
      const downloadedDocument = doc;
      const downloadedRevision = revision;
      const downloadedName = fileName;
      button.disabled = true;
      status("Rebuilding and signing save…", "wait");
      const out = await EastwardCodec.encodeSave(clone(doc));
      if (disposed) return;
      saveBlob(out, downloadedName);
      if (doc === downloadedDocument && revision === downloadedRevision) {
        setDirty(false);
        status("Save downloaded. Keep the original as a backup.");
      } else {
        status(
          `Downloaded ${downloadedName}. Newer edits have not been downloaded.`,
        );
      }
    } catch (e) {
      status(errorMessage(e), "error");
    } finally {
      if (!disposed) $("#downloadSave").disabled = false;
    }
  };

  window.addEventListener(
    "beforeunload",
    (e) => {
      if (!dirty) return;
      e.preventDefault();
      e.returnValue = "";
    },
    { signal: controller.signal },
  );
  return () => {
    disposed = true;
    controller.abort();
    root.querySelectorAll<EditorElement>("*").forEach((element) => {
      element.onclick = null;
      element.onkeydown = null;
      element.onchange = null;
      element.oninput = null;
      element.ondrop = null;
    });
  };
}
