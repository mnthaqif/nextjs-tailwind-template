# nextjs-tailwind-template

A modern, batteries‑included Next.js 14 + Tailwind CSS starter template focused on performance, DX (developer experience), accessibility, and clean architecture.

> 📚 **Complete Tech Stack Documentation**: See [TECH_STACK.md](./TECH_STACK.md) for a comprehensive list of all technologies, dependencies, and setup instructions used in this template.

## ✨ Features

- Next.js App Router (app/ directory)
- TypeScript strict mode
- Tailwind CSS with sensible defaults & design tokens (CSS variables)
- Dark / Light theme (no initial flash) + accessible toggle component
- Centralized site configuration (branding + metadata)
- Reusable SEO component (leveraging Next.js Metadata API)
- Example section-based landing page layout
- API route example (contact form endpoint stub)
- Preconfigured for incremental enhancements (animations, analytics, etc.)

## 🛠️ Tech Stack (Quick Overview)

**Core**: Next.js 14 • React 18 • TypeScript 5 • Node.js 20  
**Styling**: Tailwind CSS • PostCSS • Framer Motion • Lucide Icons  
**Forms**: React Hook Form • Zod validation  
**Tools**: ESLint • Prettier • Husky • pnpm

👉 **[View Complete Tech Stack Documentation →](./TECH_STACK.md)**

## 🗂 Directory Structure (representative)

```
app/
  layout.tsx             # Root layout (fonts, theme script, metadata)
  page.tsx               # Landing page assembling sections
  components/
    theme-toggle.tsx     # Accessible dark/light toggle
    ...                  # (Add shared UI pieces here)
  sections/
    Hero.tsx             # Example hero section (extend with more sections)
    Features.tsx         # Example features section
  api/
    contact/route.ts     # Contact form POST handler (stub)
  styles/
    globals.css          # Tailwind base + CSS variables (light/dark tokens)
public/
  favicon.ico
  og-image.png (example placeholder)
site.config.ts           # Central metadata + branding config
package.json
postcss.config.js (or .cjs)
tailwind.config.ts
README.md
```

(Your actual repo may have fewer/more files depending on which options have been added so far.)

## 🚀 Quick Start

```bash
# 1. Clone
git clone https://github.com/mnthaqif/nextjs-tailwind-template.git
cd nextjs-tailwind-template

# 2. Use Node 20 (recommended)
# If you use nvm and an .nvmrc file exists:
nvm install && nvm use

# 3. Install dependencies (pnpm preferred)
npm i -g pnpm  # if you don't have pnpm yet
pnpm install

# 4. Start dev server
pnpm dev
# Visit http://localhost:3000
```

Alternative package managers:

- npm: `npm install` then `npm run dev`
- yarn: `yarn` then `yarn dev`

## 🧞 Available Scripts

| Script            | Description                                             |
| ----------------- | ------------------------------------------------------- |
| `pnpm dev`        | Start development server (hot reload)                   |
| `pnpm build`      | Create production build (`.next`)                       |
| `pnpm start`      | Run production server (after build)                     |
| `pnpm lint`       | Run ESLint (if configured)                              |
| `pnpm type-check` | Run TypeScript without emitting (add script if missing) |
| `pnpm format`     | Run Prettier (if configured)                            |

Add missing scripts by editing `package.json`:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "format": "prettier --write ."
  }
}
```

## 🎨 Theming & Design Tokens

Color tokens are defined as CSS variables in `globals.css` inside `:root` (light) and `.dark` scopes. Tailwind references them via the config (e.g. `bg-background`, `text-foreground`).

To adjust theme colors:

1. Edit the HSL values in `globals.css`.
2. (Optional) Extend `tailwind.config.ts` under `theme.extend.colors` for custom semantic aliases.
3. Use the provided `<ThemeToggle />` component somewhere in a header or fixed position.

The theme is stored in `localStorage` under `lk-theme` and applied **before** hydration (preventing a flash of incorrect theme).

## 🌐 Metadata & SEO

`site.config.ts` centralizes:

- `name`, `description`
- `url` (set this before production deployment)
- `ogImage` (Open Graph image path)
- Author + social links

Update those values; they flow into Next.js Metadata API and any custom `<SEO />` component (if present) so pages get consistent `<head>` tags.

## 📬 Contact API Route

`app/api/contact/route.ts` currently logs or stubs a response. To wire up email delivery:

- Add an email provider (Resend, SendGrid, Postmark) SDK.
- Store API keys in `.env.local` (never commit this file).
- Replace the handler implementation to send mail / store leads.

Example environment variables (add only what you need):

```
RESEND_API_KEY=...
CONTACT_RECIPIENT=you@example.com
```

Access in the route via `process.env.RESEND_API_KEY`.

## 🔐 Environment Variables

Create `.env.local` for secrets & config. Next.js auto-loads it. Public (exposed) variables must be prefixed with `NEXT_PUBLIC_`.

Example:

```
NEXT_PUBLIC_ANALYTICS_ID=abc123
RESEND_API_KEY=... (server only)
```

## 🧪 Quality (Lint, Types, Formatting)

(If not yet added) consider adding a Git hook setup with Husky:

```bash
pnpm dlx husky-init && pnpm install
```

Then edit `.husky/pre-commit`:

```bash
pnpm lint && pnpm type-check && pnpm format
```

Or add a GitHub Actions workflow to CI (ask and one can be generated for you).

## 🏗 Suggested GitHub Actions Workflow (optional)

Basic `ci.yml` idea:

```yaml
name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: "pnpm"
      - run: corepack enable
      - run: pnpm install --frozen-lockfile
      - run: pnpm lint
      - run: pnpm type-check
      - run: pnpm build
```

(Ask and this can be committed automatically.)

## 🐳 Docker (optional)

Add a `Dockerfile` (request one if you'd like it committed):

```Dockerfile
# --- Builder stage ---
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml* ./
RUN corepack enable && pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

# --- Runner stage ---
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
# Copy only the standalone output for minimal image
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

Build & run:

```bash
docker build -t nextjs-tailwind-template .
docker run -p 3000:3000 nextjs-tailwind-template
```

## 🚀 Deployment

### Vercel (recommended)

1. Push repo to GitHub (already done if you're reading this).
2. Import the repository in Vercel.
3. Set environment variables (if any) in the Vercel dashboard.
4. Set your production domain & update `site.config.ts` `url` field.
5. Trigger a redeploy.

### Other Platforms

- Docker/Kubernetes: Use the Dockerfile above.
- Netlify: Use build command `pnpm build` & publish directory `.next` via Next adapter (or use Netlify Next.js runtime plugin).
- Render / Railway: Start command `pnpm start` after build.

## 🧩 Extending the Template

Potential enhancements you can request:

- Header + navigation scaffold
- Sitemap & robots.txt
- Analytics (Plausible, Umami, PostHog)
- Framer Motion animations
- Form validation (Zod + react-hook-form)
- System follow mode & reset for theme preferences
- i18n routing
- Docker Compose with reverse proxy + HTTPS

Just open an issue or ask in chat to generate code.

## 🛠 Troubleshooting

| Problem                       | Fix                                                                                                                   |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Tailwind classes not applying | Verify `content` globs in `tailwind.config.ts` include `./app/**/*.{ts,tsx}` and `site.config.ts`. Re-run `pnpm dev`. |
| Dark mode not changing        | Ensure `<ThemeToggle />` is mounted and CSS variables differ between `:root` and `.dark`.                             |
| Build fails on missing env    | Provide required variables in `.env.local` or Vercel dashboard.                                                       |
| Stale styles after edit       | Sometimes Next caches; restart dev server or clear `.next` directory.                                                 |

## 📄 License

Choose a license (MIT recommended) and add a `LICENSE` file. Example MIT header:

```
MIT License (c) 2024 Your Name
```

## 🙌 Contributing

1. Fork
2. Create a branch: `git checkout -b feat/thing`
3. Commit: `git commit -m "feat: add thing"`
4. Push & open PR

## 💬 Support / Questions

Open an issue or start a discussion. Feel free to request new scaffolding (CI, Docker, validation, animations, etc.).

---

Happy building! 🔧 If you want any of the optional files (CI workflow, Dockerfile, header, form validation), just ask and they can be added automatically.
