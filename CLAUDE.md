@AGENTS.md

# Fam Damily Cares — Project Context

Family blog site built with Next.js (static export). Substack RSS is the content source for the Writings section.

## Greeting Process
When the user starts the conversation with "Hello":
1. Tell a joke
2. Ask which project they want to work on: **Fam Damily Cares**, **PawCare**, or **Misty Maintenance**

## Active Backlog
See `BACKLOG.md` for the full list. Current open items:
- **Defect:** Hero Image displays poorly on mobile — needs responsive height and better cropping

## Local Development Setup
- Requires `.env.local` at project root with:
  ```
  SUBSTACK_FEED_URL=https://famdamilycares.substack.com/feed
  ```
- Run `npm run dev` to start locally
- Writings will be empty without this env var (see `lib/writings.ts`)

