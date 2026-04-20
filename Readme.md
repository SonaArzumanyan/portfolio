# Portfolio Starter

Starter portfolio project built with React, TypeScript, Vite, Ant Design, React Router, and pnpm.

## Tech Stack

- React
- TypeScript
- Vite
- Ant Design
- React Router
- ESLint + Prettier
- pnpm

## Getting Started

```bash
pnpm install
pnpm dev
```

Open the app at [http://localhost:5173](http://localhost:5173).

## Available Scripts

- `pnpm dev` - start development server
- `pnpm build` - type-check and build production bundle
- `pnpm preview` - preview production build locally
- `pnpm lint` - run ESLint
- `pnpm lint:fix` - run ESLint and auto-fix
- `pnpm format` - run Prettier write mode
- `pnpm format:check` - run Prettier check mode

## Project Structure

```text
src/
  components/   reusable UI pieces
  layouts/      shared page layout (header/content/footer)
  pages/        route pages (Home, Projects, About, Contact)
  router/       route definitions
  styles/       global styles
```

## Where To Edit

- Home content: `src/pages/HomePage.tsx`
- Projects list: `src/pages/ProjectsPage.tsx`
- About details: `src/pages/AboutPage.tsx`
- Contact form: `src/pages/ContactPage.tsx`
- Navigation and shell layout: `src/layouts/PortfolioLayout.tsx`
- Theme tokens: `src/main.tsx`
