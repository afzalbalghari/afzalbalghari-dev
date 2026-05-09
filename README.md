# Developer Portfolio

A modern SaaS-style developer portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Stack

| Tool | Purpose |
|---|---|
| Next.js 14 (App Router) | Framework & routing |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| `clsx` + `tailwind-merge` | Class merging utility |

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles + Tailwind
│   ├── layout.tsx           # Root layout (fonts, metadata, nav/footer)
│   └── page.tsx             # Home page — composes all sections
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Fixed nav with scrollspy + mobile menu
│   │   ├── Footer.tsx       # Footer with social links
│   │   └── index.ts
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── DevOpsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── CertificationsSection.tsx
│   │   ├── BlogSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── index.ts
│   │
│   └── ui/
│       ├── Badge.tsx        # Colored badge chip
│       ├── Button.tsx       # Primary/secondary button + link
│       ├── SectionHeader.tsx
│       ├── Tag.tsx          # Monospace tag chip
│       └── index.ts
│
├── data/                    # Static portfolio content (edit here!)
│   ├── experience.ts
│   ├── projects.ts
│   ├── skills.ts
│   ├── devops.ts
│   ├── education.ts
│   ├── certifications.ts
│   ├── blog.ts
│   └── index.ts
│
├── hooks/
│   ├── useScrollspy.ts      # Active nav link tracking
│   └── useContactForm.ts    # Form state + submit handler
│
├── lib/
│   ├── motion.ts            # Framer Motion reusable variants
│   └── utils.ts             # cn() utility (clsx + tailwind-merge)
│
└── types/
    └── index.ts             # All TypeScript interfaces
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Type check
npm run type-check

# Build for production
npm run build
```

## Personalizing

All content lives in `src/data/`. Edit the files there — no component changes needed:

- `experience.ts` — Work history
- `projects.ts` — Featured projects
- `skills.ts` — Developer skill groups
- `devops.ts` — DevOps/cloud tools
- `education.ts` — Education background
- `certifications.ts` — Certs (mark `upcoming: true` for in-progress)
- `blog.ts` — Blog post previews

Update your personal details in:
- `src/app/layout.tsx` — Page title, description, OG metadata
- `src/components/layout/Footer.tsx` — Social links
- `src/components/sections/ContactSection.tsx` — Contact info

## Deploy

One-click deploy to Vercel:

```bash
npx vercel
```
