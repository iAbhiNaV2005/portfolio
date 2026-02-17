# Abhinav Mitra — Portfolio

## Quick Start

### Prerequisites

- Node.js ≥ 18
- npm (or pnpm)

### 1. Backend

```bash
cd backend
cp ../.env.example .env   # edit as needed
npm install
npm run dev               # → http://localhost:4000
```

### 2. Frontend

```bash
cd frontend
npm install
npm run dev               # → http://localhost:3000
```


---

## Project Structure

```
/frontend          Next.js app (TypeScript + Tailwind + Framer Motion)
  /app             Pages: /, /about, /projects, /experience, /resume, /contact
  /components      Header, Footer, LoveButton, ProjectCard, CursorParticles, etc.
  /lib             api.ts (fetch helpers), data.ts (content), theme.ts (colors)

/backend           Express.js API (TypeScript)
  /src
    index.ts       Server entry + middleware
    db.ts          JSON-file persistence (data/db.json)
    /routes        love.ts, track.ts, contact.ts, stats.ts

.env.example       Environment variable template
```


## Deployment

### Frontend → Vercel

1. Push the `frontend/` folder to GitHub
2. Import in [Vercel](https://vercel.com) → set root directory to `frontend`
3. Add env var: `NEXT_PUBLIC_API_URL=https://your-backend.railway.app`

### Backend → Railway / Render

1. Push `backend/` to GitHub
2. Import in [Railway](https://railway.app) or [Render](https://render.com)
3. Set env vars from `.env.example`
4. Start command: `npm run build && npm start`

### Alternative: Next.js API Routes (serverless)

You can move the backend logic into `frontend/app/api/` route handlers to avoid a separate service. This simplifies deployment (single Vercel deploy) but couples concerns. The current split keeps things modular.



## Tech Stack

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS v4** (JIT)
- **Framer Motion** (animations)
- **Canvas** (cursor particles)
- **Express.js** (TypeScript)
- **JSON file persistence** (zero-dep, SQLite-free)
- **Nodemailer** (optional SMTP)

## License

MIT
