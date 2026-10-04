import { useEffect, useRef } from "react";
import { initializeEditor } from "./lib/editor.ts";

function App() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (root.current) return initializeEditor(root.current);
  }, []);
  return (
    <div ref={root}>
      <div className="sky-sparkles" aria-hidden="true"></div>
      <main className="shell">
        <header className="top">
          <div className="brand">
            <p className="eyebrow">
              <span aria-hidden="true">✦</span> Online save editor tool
            </p>
            <h1>
              Eastward
              <br />
              <span>Save Editor</span>
            </h1>
            <p className="tagline">
              Pack your save, tune your adventure, and head east! Everything
              happens safely in your browser.
            </p>
            <div className="hero-pills" aria-label="Editor features">
              <span>✦ Eastward v1.2.1</span>
              <span>✦ Octopia v1.1</span>
            </div>
          </div>
          <div className="hero-scene" aria-hidden="true">
            <img
              className="scene-building"
              src={`${import.meta.env.BASE_URL}assets/images/building-fragment.png`}
              alt=""
            />
            <img
              className="scene-left"
              src={`${import.meta.env.BASE_URL}assets/images/topleftman.png`}
              alt=""
            />
            <img
              className="scene-sam"
              src={`${import.meta.env.BASE_URL}assets/images/sam.png`}
              alt=""
            />
            <img
              className="scene-right"
              src={`${import.meta.env.BASE_URL}assets/images/rightman.png`}
              alt=""
            />
            <span className="scene-star star-one">✦</span>
            <span className="scene-star star-two">✦</span>
          </div>
        </header>

        <p
          id="status"
          className="status"
          role="status"
          aria-live="polite"
          hidden
        ></p>
        <div className="card">
          <section
            id="drop"
            className="drop"
            tabIndex={0}
            role="button"
            aria-controls="file"
          >
            <img
              className="drop-bag"
              src={`${import.meta.env.BASE_URL}assets/images/bag.png`}
              alt="A grocery bag full of vegetables"
            />
            <div className="drop-icon" aria-hidden="true">
              ↓
            </div>
            <h2>Drop a save file here</h2>
            <p>
              or click to choose a <code>.pack_save</code> file
            </p>
            <span className="choose-file">
              Choose a file <span aria-hidden="true">→</span>
            </span>
            <input id="file" type="file" accept=".pack_save" hidden />
          </section>

          <noscript>
            <p className="noscript">
              This editor requires JavaScript to decode save files locally.
            </p>
          </noscript>

          <section id="workspace" className="workspace hidden">
            <div className="filebar">
              <div className="fileinfo">
                <div className="filename">Loaded save</div>
                <div className="meta">
                  Nothing changes on disk until you download a rebuilt save.
                </div>
              </div>
              <div className="actions">
                <button id="changeFile" className="secondary">
                  Open another
                </button>
                <button id="undo" className="secondary">
                  Undo all
                </button>
                <button id="downloadSave">Download save</button>
              </div>
            </div>

            <nav className="modebar" aria-label="Edit menu">
              <div className="tabs" role="tablist">
                <button
                  className="tab active"
                  role="tab"
                  aria-selected="true"
                  aria-controls="playerPanel"
                  data-tab="player"
                >
                  Player &amp; Farm
                </button>
                <button
                  className="tab"
                  role="tab"
                  aria-selected="false"
                  aria-controls="toolsPanel"
                  data-tab="tools"
                >
                  Tools
                </button>
                <button
                  className="tab"
                  role="tab"
                  aria-selected="false"
                  aria-controls="questsPanel"
                  data-tab="quests"
                >
                  Quests
                </button>
                <button
                  className="tab"
                  role="tab"
                  aria-selected="false"
                  aria-controls="inventoryPanel"
                  data-tab="inventory"
                >
                  Inventory
                </button>
              </div>
              <label
                className="search inventory-search hidden"
                htmlFor="search"
              >
                <span aria-hidden="true">⌕</span>
                <input
                  id="search"
                  type="search"
                  placeholder="Search items…"
                  autoComplete="off"
                />
              </label>
            </nav>

            <article className="content">
              <div className="section-head">
                <div>
                  <p className="eyebrow" id="sectionLabel">
                    Common values
                  </p>
                  <h2 id="sectionTitle">Player &amp; Farm</h2>
                </div>
                <span id="changeState" className="change-state">
                  No unapplied changes
                </span>
              </div>
              <section id="playerPanel" className="panel" role="tabpanel">
                <p className="help">
                  Change common Eastward or Octopia values using their saved
                  field IDs. These controls update both mirrored player records.
                </p>
                <div className="grid">
                  <label>
                    current_day
                    <input id="day" type="number" required min="1" step="1" />
                  </label>
                  <label>
                    current_time
                    <input id="time" type="number" required min="0" step="1" />
                  </label>
                  <label>
                    money
                    <input id="money" type="number" required min="0" step="1" />
                  </label>
                  <label>
                    coin
                    <input id="coin" type="number" required min="0" step="1" />
                  </label>
                  <label>
                    stamina
                    <input
                      id="stamina"
                      type="number"
                      required
                      min="0"
                      step="1"
                    />
                  </label>
                  <label>
                    max_stamina
                    <input
                      id="maxStamina"
                      type="number"
                      required
                      min="1"
                      step="1"
                    />
                  </label>
                  <label>
                    max_mine_level
                    <input id="mine" type="number" required min="0" step="1" />
                  </label>
                  <label>
                    cook_level
                    <input
                      id="cooking"
                      type="number"
                      required
                      min="0"
                      step="1"
                    />
                  </label>
                </div>
                <button id="applyPlayer" className="apply">
                  Apply changes
                </button>
              </section>
              <section id="toolsPanel" className="panel hidden" role="tabpanel">
                <p className="help">
                  Set the upgrade levels found in this save. Tool names are read
                  directly from the uploaded file.
                </p>
                <div id="toolList" className="grid"></div>
                <button id="applyTools" className="apply">
                  Apply tool changes
                </button>
              </section>
              <section
                id="questsPanel"
                className="panel hidden"
                role="tabpanel"
              >
                <div className="panel-intro">
                  <p className="help">
                    Select active quest-state IDs from the uploaded save and
                    mark them as finished. Keep your original save as a backup.
                  </p>
                  <span id="questCount" className="count"></span>
                </div>
                <div className="table">
                  <table>
                    <thead>
                      <tr>
                        <th scope="col">SELECT</th>
                        <th scope="col">QUEST STATE ID</th>
                      </tr>
                    </thead>
                    <tbody id="quests"></tbody>
                  </table>
                </div>
                <button id="applyQuests" className="apply">
                  Complete selected quests
                </button>
              </section>
              <section
                id="inventoryPanel"
                className="panel hidden"
                role="tabpanel"
              >
                <div className="panel-intro">
                  <p className="help">
                    Search item names from each inventory entry's saved ID and
                    edit their quantities.
                  </p>
                  <span id="itemCount" className="count"></span>
                </div>
                <div className="table">
                  <table>
                    <thead>
                      <tr>
                        <th scope="col">ITEM NAME</th>
                        <th scope="col">QUANTITY</th>
                      </tr>
                    </thead>
                    <tbody id="items"></tbody>
                  </table>
                </div>
                <button id="applyItems" className="apply">
                  Apply visible quantities
                </button>
              </section>
            </article>
          </section>
        </div>

        <footer className="footer">
          <span>
            Made with <b aria-label="love">♥</b> by
          </span>
          <strong>DEKTHAIINCHINA_</strong>
        </footer>
      </main>
      <img
        className="edge-character edge-left"
        src={`${import.meta.env.BASE_URL}assets/images/leftman.png`}
        alt=""
        aria-hidden="true"
      />
      <img
        className="edge-character edge-right"
        src={`${import.meta.env.BASE_URL}assets/images/rightbottomman.png`}
        alt=""
        aria-hidden="true"
      />
    </div>
  );
}

export default App;
