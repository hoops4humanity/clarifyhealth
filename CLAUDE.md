# Clarify Health — Project Overview

## What is Clarify Health?

Clarify Health is an educational health information website built by a high school student in New Jersey. The core problem it solves: when people receive a new diagnosis, online health information is typically full of medical jargon and hard to understand. Clarify Health rewrites that information in plain, everyday English — no assumptions about prior medical knowledge.

It is explicitly **not** a medical advice service. Every page carries a disclaimer directing users to speak with a doctor.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend framework | React 18 + TypeScript |
| Build tool | Vite 5 |
| Routing | React Router v6 |
| Styling | Tailwind CSS v3 with CSS custom properties |
| Component library | shadcn/ui (Radix UI primitives) |
| Icons | Lucide React |
| Forms | React Hook Form + Zod |
| Data fetching | TanStack Query v5 (lightly used) |
| Fonts | Playfair Display (headings), DM Sans (body) |
| Backend API server | Express.js (Node.js, ES modules) |
| AI | Anthropic Claude API (`claude-haiku-4-5`) via `@anthropic-ai/sdk` |
| i18n | React Context (`LanguageContext`) — EN / ES with `t(key)` lookup |
| Rate limiting | `express-rate-limit` (10 req / hour / IP) |
| Deployment — frontend | Lovable (static hosting) |
| Deployment — backend | Railway (Node.js server) |
| Dev runner | `concurrently` (runs Vite + Express together) |

---

## Project Structure

```
clarifyhealth/
├── src/
│   ├── pages/
│   │   ├── Index.tsx          # Homepage — hero, search bar, topic grid
│   │   ├── TopicsIndex.tsx    # Full topic listing
│   │   ├── TopicPage.tsx      # Individual topic detail (/topics/:id)
│   │   ├── AskPage.tsx        # AI-powered Q&A page (/ask)
│   │   ├── AboutPage.tsx      # About / mission page
│   │   └── NotFound.tsx       # 404
│   ├── components/
│   │   ├── Header.tsx         # Nav with mobile menu
│   │   ├── Footer.tsx
│   │   ├── FloatingAskButton.tsx  # Mobile-only floating CTA
│   │   ├── NavLink.tsx
│   │   └── PageMeta.tsx       # SEO meta tags + JSON-LD structured data
│   ├── contexts/
│   │   └── LanguageContext.tsx # Global EN/ES language provider + t() translations
│   ├── data/
│   │   ├── topics.ts          # English health content (10 topics) + getTopics(lang)
│   │   └── topics-es.ts       # Spanish translations of all 10 topics
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   └── lib/
│       └── utils.ts           # cn() classname utility
├── server.js                  # Express backend (API key, rate limiting, Anthropic call)
├── .env                       # Local secrets — NOT committed
├── .env.example               # Committed reference for required env vars
└── vite.config.ts             # Proxies /api → localhost:3001 in dev
```

---

## What Has Been Built

### Static Content
- **10 health topics** with structured sections, plain-language definitions, doctor questions, and cited sources:
  Type 2 Diabetes, High Blood Pressure, High Cholesterol, Asthma, Anxiety, Depression, Heart Disease, Kidney Disease, Thyroid Disease, Acid Reflux
- Each topic page has SEO meta tags and JSON-LD medical structured data

### Pages & UI
- **Homepage** (`/`) — full-viewport hero, search bar (redirects to `/ask?q=`), topic grid, stats strip
- **Topics index** (`/topics`) — grid of all 10 topic cards
- **Topic detail** (`/topics/:id`) — full article with sections, doctor questions, sources
- **Ask page** (`/ask`) — AI Q&A interface (see below)
- **About page** (`/about`) — mission statement and disclaimer
- Mobile-responsive throughout; floating "Ask" button on mobile

### AI Q&A Feature (`/ask`)
- Two tabs: **"Ask a Question"** and **"Understand My Diagnosis"**
- Tab routing selects a different system prompt on the backend:
  - "Understand My Diagnosis" → Prompt A (diagnosis decoder, 400-word limit)
  - "Ask a Question" + wellness keyword detected → Prompt C (wellness, 300-word limit)
  - "Ask a Question" otherwise → Prompt B (general Q&A, 300-word limit)
- Wellness keywords: weight, sleep, stress, smoking, exercise, diet, eating, fitness, mental health, anxiety, mood
- Language toggle (EN / ES) — appended to system prompt so Claude responds in the selected language
- Frontend calls `POST /api/ask` with `{ question, mode, language }`
- Backend rate limiting: 10 req / hour / IP via `express-rate-limit`
- Client-side rate limiting: 10 req / hour tracked in `localStorage` (`clarify_rate_timestamps`), shows green "hourly limit" message
- Backend calls Claude (`claude-haiku-4-5`) with the selected system prompt
- Green animated pulse-dot loading indicator while waiting for a response
- Last 5 Q&A pairs stored in `localStorage` (`clarify_question_history`); collapsible "Recent questions" panel restores both question and answer
- Supports `?q=` URL param (homepage search pre-populates and auto-submits)
- URLs in responses are rendered as clickable links

### Bilingual Support (EN / ES)
- **Language toggle** in the Header nav (desktop: pill next to links; mobile: in overlay menu)
- Language preference persisted in `localStorage` (`clarify_language`) and sets `document.documentElement.lang`
- **`LanguageContext`** (`src/contexts/LanguageContext.tsx`) provides `lang`, `setLang`, and `t(key)` across the app
- All UI strings (nav, headings, buttons, placeholders, error messages, etc.) are translated via the `t()` function
- **All 10 health topics** fully translated to Spanish in `src/data/topics-es.ts`; `getTopics(lang)` selects the correct dataset
- **AI Q&A** sends `language` in the request body; `server.js` appends "Respond in [Spanish/English]" to the system prompt
- **hreflang SEO tags** (`en`, `es`, `x-default`) injected by `PageMeta` component
- `og:locale` meta tag set to `en_US` or `es_ES`
- JSON-LD structured data includes `inLanguage` field

### Infrastructure
- Express backend (`server.js`) runs separately from Vite; handles all Anthropic API calls so the key is never exposed to the browser
- Vite dev proxy forwards `/api/*` to `http://localhost:3001`
- `npm run dev` starts both servers via `concurrently`
- CORS configured to allow Lovable frontend URL (set via `FRONTEND_URL` env var on Railway)
- `.env` is gitignored; `.env.example` documents all required variables

---

## What Still Needs to Be Built

- **More health topics** — currently only 10; the data structure in `topics.ts` is ready to scale
- **Search** — homepage search bar routes to `/ask`; a dedicated topic search/filter on `/topics` doesn't exist yet
- **Dark mode** — `next-themes` is installed but not wired up to a toggle in the UI
- **User accounts / saved answers** — history is only in `localStorage` (per-device, not logged in)
- **Analytics** — no tracking is set up to know which topics/questions are most common
- **Production serving** — Express currently only serves the API; for a self-hosted deployment it would need to also serve the Vite build output (or sit behind a reverse proxy)

---

## Important Decisions

**No backend for content** — All 10 health topics are static TypeScript data in `src/data/topics.ts`. This keeps the site fast and avoids a database for content that changes rarely. The tradeoff is that adding a topic requires a code change and redeploy.

**Backend required for AI** — The Anthropic API key must stay server-side. A thin Express server was added specifically for this; it is the only reason a backend exists.

**`claude-haiku-4-5` for Q&A** — Haiku is used for cost efficiency given the high volume of short health questions. The system prompts are detailed enough to produce high-quality answers at this model tier. Upgrading to Sonnet or Opus is a one-line change in `server.js` if answer quality needs improvement.

**System prompt is fixed and server-side** — The health educator prompt lives only in `server.js`, not in the frontend. Users cannot manipulate it.

**Disclaimer is appended server-side** — The "This is general health information, not medical advice" line is added by `server.js` after every response, so it cannot be bypassed by a frontend change.

**Rate limiting is IP-based** — 10 requests per hour per IP using `express-rate-limit`. No authentication required. Simple to raise or lower by changing `max` in `server.js`.

**Split deployment (Lovable + Railway)** — Lovable only hosts static files; Railway runs the Express server. The frontend uses `VITE_API_URL` (set in Lovable's env vars) to reach the backend. In dev, Vite's proxy makes this transparent so `VITE_API_URL` can be left blank locally.

**ES modules throughout** — `package.json` has `"type": "module"`, so `server.js` uses `import` syntax. This matches the frontend and avoids mixing module systems.

**Lightweight i18n via React Context** — Instead of a heavy i18n library, translations live in a flat `strings` object inside `LanguageContext.tsx` with a `t(key)` lookup. Spanish topic content is a separate file (`topics-es.ts`) selected by `getTopics(lang)`. This keeps bundle size small and avoids configuration overhead for just two languages.
