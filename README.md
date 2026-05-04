# shadcn/ui monorepo template

This template is for creating a monorepo with shadcn/ui.

## Getting started

This is a [Turborepo](https://turborepo.com/) monorepo managed with [pnpm](https://pnpm.io/).

Prerequisites:

- Node `>=20` (a `.nvmrc` is included — run `nvm use`)
- pnpm `10.4.1` (the version pinned in `package.json`)

```bash
# 1. Use the correct Node version
nvm install   # one-time, if Node 20 isn't installed
nvm use       # reads .nvmrc

# 2. Make pnpm available at the pinned version
corepack enable

# 3. Install all workspace dependencies
pnpm install

# 4. One-time Convex backend setup (interactive: login + provision deployment)
pnpm --filter @workspace/backend setup

# 5. Start every app + the backend watcher
pnpm dev
```

`pnpm dev` runs `turbo dev`, which starts all workspaces in parallel:

| Workspace            | URL / notes               |
| -------------------- | ------------------------- |
| `apps/web`           | http://localhost:3000     |
| `apps/widget`        | http://localhost:3001     |
| `apps/embed`         | http://localhost:3002     |
| `packages/backend`   | Convex dev watcher        |

To run a single app, scope it with a filter, e.g. `pnpm dev --filter web`.

> `turbo` is a local dev dependency, so prefer `pnpm dev` over a bare `turbo dev`.
> The `web` and `widget` apps also need environment variables (Convex URL, Clerk
> keys, Vapi, Sentry, etc.) — set these up before the apps will fully work.

## Usage

```bash
pnpm dlx shadcn@latest init
```

## Adding components

To add components to your app, run the following command at the root of your `web` app:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

This will place the ui components in the `packages/ui/src/components` directory.

## Tailwind

Your `tailwind.config.ts` and `globals.css` are already set up to use the components from the `ui` package.

## Using components

To use the components in your app, import them from the `ui` package.

```tsx
import { Button } from "@workspace/ui/components/button"
```
