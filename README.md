# AI Customer Support Widget

An embeddable AI customer-support widget with an admin dashboard for managing conversations, and widget settings. Turbo monorepo built with TypeScript, Next.js, React, Convex, Clerk, OpenAI, Vapi, Tailwind CSS, shadcn/ui, and pnpm.

## Requirements

* Node.js 20 or later
* pnpm 10.4.1

## Environment Variables

### Admin Dashboard

`apps/web/.env.local`:

```env
NEXT_PUBLIC_CONVEX_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Optional:
SENTRY_AUTH_TOKEN=
```

### Customer-Support Widget

`apps/widget/.env.local`:

```env
NEXT_PUBLIC_CONVEX_URL=
```

Use the same Convex deployment URL for both `widget` and `web` apps.

### Demo

`apps/embed/.env`:

```env
VITE_WIDGET_URL=http://localhost:3001
```

### Convex Backend

```env
CLERK_JWT_ISSUER_DOMAIN=
CLERK_SECRET_KEY=
CLERK_WEBHOOK_SECRET=
OPENAI_API_KEY=
AWS_REGION=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
```

## Development

Install:

```bash
nvm install
nvm use
corepack enable
pnpm install
```

Initial Convex setup:

```bash
pnpm --filter @workspace/backend setup
```

Start dev server:

```bash
pnpm dev
```

## Build

```bash
pnpm build
```
