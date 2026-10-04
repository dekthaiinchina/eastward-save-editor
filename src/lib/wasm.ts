// Firefox DevTools resolves a source-map URL even when an inline Wasm module
// has none. Its synthetic `wasm:` URL cannot serve as the base of a relative
// URL. An absolute, inline map avoids that lookup. This vendor binary ships
// without original sources, so the map deliberately contains no mappings.
const sourceMapURL = `data:application/json;base64,${btoa(JSON.stringify({
  version: 3,
  sources: [],
  names: [],
  mappings: '',
}))}`;

function encodeLength(value: number): number[] {
  const bytes: number[] = [];
  do {
    const byte = value & 0x7f;
    value >>>= 7;
    bytes.push(byte | (value ? 0x80 : 0));
  } while (value);
  return bytes;
}

export function withInlineWasmSourceMap(binary: Uint8Array): Uint8Array<ArrayBuffer> {
  const encoder = new TextEncoder();
  const name = encoder.encode('sourceMappingURL');
  const url = encoder.encode(sourceMapURL);
  // A Wasm custom section contains a length-prefixed name and URL string.
  const payload = new Uint8Array([
    ...encodeLength(name.length), ...name,
    ...encodeLength(url.length), ...url,
  ]);
  const header = new Uint8Array([0, ...encodeLength(payload.length)]);
  const result = new Uint8Array(binary.length + header.length + payload.length);
  result.set(binary);
  result.set(header, binary.length);
  result.set(payload, binary.length + header.length);
  return result;
}
