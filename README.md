# React Revision Workspace

This repository is a personal collection of small React projects and exercises created while revising and practicing React fundamentals. Most folders are standalone Vite + React projects intended for quick experimentation and learning.

**Prerequisites:** Node.js (recommend v18+), npm or pnpm, Git.

**Common commands (per project):**

- Install dependencies:

  ```bash
  npm install
  ```

- Start dev server:

  ```bash
  npm run dev
  ```

- Build for production:

  ```bash
  npm run build
  ```

- Preview production build:

  ```bash
  npm run preview
  ```

**How to run a project**

1. Open a terminal in this workspace.
2. Change directory to the project folder, e.g. `cd 01-folder`.
3. Run `npm install` then `npm run dev`.
4. Open the URL shown by Vite (usually http://localhost:5173).

**Projects in this workspace**

- `01-folder` — basic Vite + React starter.
- `02-components` — component examples and composition exercises.
- `03-props` — demonstrations of props and data flow.
- `04-cards-project` — card UI examples (uses lucide icons).
- `05-css` — CSS-focused styling examples.
- `06-tailwind` — Tailwind CSS examples.
- `07-UI-project` — UI project with icons and Tailwind utilities.
- `08-functions` — examples focused on helper functions and utilities.
- `09-use-state` — exercises for the `useState` hook.
- `10-form-handling` — form handling and validation examples.
- `11-two-way-binding` — two-way data binding exercises.
- `12-notes project` — notes app (Tailwind + lucide). Package name may differ inside (`13-notes-app`).
- `13-local-storage` — examples using `localStorage`.
- `14-APi-calling` — API calls using `axios`.
- `15-useEffect` — `useEffect` hook examples.
- `16-Gallery-project` — gallery app (uses `axios` and Tailwind).
- `17-React-Router-Dom` — routing examples using `react-router-dom`.
- `18-Advance-Routing` — advanced routing + Tailwind examples.
- `19-ContextApi` — Context API demonstrations.
- `basics` — plain JS/HTML examples (non-Vite) located in `basics/`.

**Notes & tips**

- Most projects use Vite (see `package.json` in each project). Use Node v18+ for best compatibility.
- Some projects use Tailwind and require the Tailwind dev plugin; follow the project-specific README (if present) for extra setup.
- Linting is available via `npm run lint` in projects that include ESLint config.

If you want, I can:

- Add per-project README files with screenshots and descriptions.
- Create a script to start multiple projects concurrently.
