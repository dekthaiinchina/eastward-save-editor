# Eastward Save Editor

A browser-based editor for Eastward and Octopia `.pack_save` files, built with React, TypeScript, and Vite. Saves are decoded, edited, and rebuilt locally in the browser; no backend or save uploads are required.

## Requirements

- Node.js 24 or newer. Tests use Node's native TypeScript support.
- npm, included with Node.js.
- Internet access to download dependencies during installation.

## Install and run

Open a terminal in the project directory and install dependencies:

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

Open the local URL printed by Vite in your browser. Keep the terminal running while using the development server. Press `Ctrl+C` to stop it.

## Using the editor

1. Open or drop a `.pack_save` file into the editor.
2. Choose Player & Farm, Tools, Quests, or Inventory.
3. Edit supported values and apply the changes in that section.
4. Download the rebuilt save.

**Undo all** restores the originally opened save. Keep a backup before replacing a game save. The editor checks save integrity when opening a file and preserves data outside the edited fields.

## Project structure

```text
.
├── public/
│   └── assets/images/     Static artwork served by Vite
├── src/
│   ├── app.tsx            React page and editor lifecycle
│   ├── main.tsx           React application entry point
│   ├── index.css          Application styles
│   └── lib/
│       ├── editor.ts      File handling, editing controls, undo, and downloads
│       └── codec.ts       Save decoding, encoding, and integrity verification
├── tests/
│   └── codec.test.ts      Codec round-trip, corruption, and compatibility tests
├── index.html             HTML entry point
├── package.json           Dependencies and npm scripts
├── vite.config.ts         Vite, React, and React Compiler configuration
├── eslint.config.ts       ESLint configuration
├── tsconfig.json          TypeScript project references
├── tsconfig.app.json      TypeScript settings for application code
└── tsconfig.node.json     TypeScript settings for tooling and tests
```

The codec bundles MessagePack, raw DEFLATE, and Whirlpool-512 implementations. It exposes a typed public interface, while its preserved third-party internals use permissive types. Bundled license notices are retained in `src/lib/codec.ts`.

## Checks

Run the codec tests:

```sh
npm test
```

Run ESLint:

```sh
npm run lint
```

The production build also checks the TypeScript projects:

```sh
npm run build
```

Tests cover save rebuilding, Unicode and binary-data preservation, corrupted and truncated files, and byte-for-byte compatibility with an original codec fixture.

## Production build and preview

Create the production build:

```sh
npm run build
```

Vite writes the generated site to `dist/`. Preview that build locally:

```sh
npm run preview
```

Open the URL printed in the terminal. Run the build again after changing source files to refresh the preview. For deployment, publish the contents of `dist/` using a static hosting service.

## Command reference

| Command | Purpose |
| --- | --- |
| `npm install` | Install project dependencies |
| `npm run dev` | Start the development server |
| `npm test` | Run TypeScript codec tests |
| `npm run lint` | Check code with ESLint |
| `npm run build` | Check TypeScript and generate `dist/` |
| `npm run preview` | Serve the production build locally |
