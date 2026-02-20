

# Prep with Smile -- Complete Redesign Plan

## Overview
Transform the current single-page site into a content-rich, multi-page website with a fresh light theme (teal + orange), glassmorphism effects, dedicated service pages, and city location pages.

---

## 1. Theme Overhaul: Light Teal + Orange

Replace the current dark navy palette with a bright, modern light theme:

- **Primary (Teal):** #0D9488 (teal-600) for headers, buttons, accents
- **Secondary (Orange):** #F97316 (orange-500) for CTAs, highlights, badges
- **Background:** #F8FAFB (very light cool white)
- **Surface:** white with glassmorphism (semi-transparent backgrounds + backdrop-blur)
- **Text:** #1E293B (slate-800) for body, #0F172A (slate-900) for headings
- **Gradients:** teal-to-emerald for headers, orange-to-amber for CTAs

---

## 2. Glassmorphism Design System

Add reusable glass-effect utilities in `index.css`:

- `.glass` -- `background: rgba(255,255,255,0.7); backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.3);`
- `.glass-dark` -- teal-tinted glass for hero overlays
- Glass cards throughout all sections (navbar, service cards, pricing cards, location cards)

---

## 3. Logo

Create an SVG logo component (`src/components/Logo.tsx`) featuring a stylized "P" with a smile curve in teal + orange, with "Prep with Smile" text beside it. Used in Header and Footer.

---

## 4. Multi-Page Routing

Convert from single-page scroll to a multi-page site with shared Header/Footer layout.

**Pages to create:**

| Route | File | Description |
|-------|------|-------------|
| `/` | `pages/Index.tsx` | Home (hero, problems, process overview, testimonials preview, CTA) |
| `/business-english` | `pages/BusinessEnglish.tsx` | Full service page with hero image, curriculum, process |
| `/career-counselling` | `pages/CareerCounselling.tsx` | Career coaching, CV, LinkedIn, personal branding |
| `/interview-prep` | `pages/InterviewPrep.tsx` | Mock interviews, strategies, confidence building |
| `/ielts-prep` | `pages/IELTSPrep.tsx` | IELTS exam prep, scoring strategies, practice tests |
| `/chi-siamo` | `pages/ChiSiamo.tsx` | About us, mission, team |
| `/prezzi` | `pages/Prezzi.tsx` | Pricing plans |
| `/contatti` | `pages/Contatti.tsx` | Contact form |
| `/citta/:slug` | `pages/CityPage.tsx` | Dynamic city location pages |

**Layout component** (`src/components/Layout.tsx`): wraps all pages with Header + Footer.

---

## 5. Service Pages Structure (Each Page)

Each of the 4 service pages follows a consistent template:

1. **Hero banner** -- full-width image with glassmorphism overlay, title, subtitle, CTA
2. **"What You'll Learn" grid** -- 6-8 topic cards with icons
3. **"100% Personalized Process"** section -- 4-step visual timeline showing diagnostic, custom curriculum design, live sessions, results
4. **"Customized Curriculum"** section -- detailed breakdown of what the curriculum covers, tailored to the service
5. **Additional images** -- 2-3 professional Unsplash images per page
6. **CTA banner** -- book free session

### Service Content:

**Business English:** Presentations, negotiations, emails, meetings, cross-cultural communication, business writing

**Career Counselling:** CV optimization, LinkedIn branding, salary negotiation, personal branding, career strategy, networking

**Interview Prep:** Mock interviews, STAR method, behavioral questions, confidence techniques, company research, follow-up strategies

**IELTS Prep:** Listening/reading/writing/speaking modules, scoring strategies, timed practice, common mistakes, band score targets

---

## 6. City Location Pages

Create pages for top Italian cities where services are offered (online-focused but locally relevant):

- Milano (`/citta/milano`)
- Roma (`/citta/roma`)
- Torino (`/citta/torino`)
- Firenze (`/citta/firenze`)
- Bologna (`/citta/bologna`)
- Napoli (`/citta/napoli`)

Each city page includes:
- Hero with a city landmark photo
- "Corsi di inglese a [City]" heading (SEO)
- Local context paragraph
- Services available grid
- Glassmorphism testimonial card
- Contact CTA

Data-driven: single `CityPage.tsx` component with a cities data file (`src/data/cities.ts`).

---

## 7. Updated Home Page

The home page becomes a hub linking to all service pages:

1. **Hero** -- new light-themed hero with teal/orange gradient text, front image of professional, glass-effect stat cards
2. **Services Grid** -- 4 glass cards (Business English, Career Counselling, Interview Prep, IELTS Prep) each linking to their page with a thumbnail image
3. **"100% Personalized Process"** -- 4-step overview with icons and glassmorphism cards
4. **"Customized Curriculum" highlight** -- brief section explaining tailored approach
5. **City locations preview** -- horizontal scroll of city cards linking to `/citta/[slug]`
6. **Pricing preview** -- 3 plan cards
7. **Contact CTA**

---

## 8. Updated Navigation

Header nav links updated to:
- Home (`/`)
- Servizi (dropdown: Business English, Career Counselling, Interview Prep, IELTS Prep)
- Dove Siamo (dropdown: city links)
- Chi Siamo (`/chi-siamo`)
- Prezzi (`/prezzi`)
- CTA button: "Prenota Sessione GRATIS" (`/contatti`)

---

## 9. Technical Details

### Files to create:
- `src/components/Logo.tsx` -- SVG logo
- `src/components/Layout.tsx` -- shared layout wrapper
- `src/components/ServiceHero.tsx` -- reusable hero for service pages
- `src/components/PersonalizedProcess.tsx` -- reusable 4-step process section
- `src/components/CustomCurriculum.tsx` -- reusable curriculum section
- `src/components/CityCard.tsx` -- city preview card
- `src/components/GlassCard.tsx` -- reusable glassmorphism card
- `src/data/cities.ts` -- city data
- `src/data/services.ts` -- service page data
- `src/pages/BusinessEnglish.tsx`
- `src/pages/CareerCounselling.tsx`
- `src/pages/InterviewPrep.tsx`
- `src/pages/IELTSPrep.tsx`
- `src/pages/ChiSiamo.tsx`
- `src/pages/Prezzi.tsx`
- `src/pages/Contatti.tsx`
- `src/pages/CityPage.tsx`

### Files to modify:
- `src/index.css` -- new teal/orange theme variables, glassmorphism utilities
- `tailwind.config.ts` -- updated color tokens
- `src/App.tsx` -- add all new routes with Layout wrapper
- `src/components/Header.tsx` -- new nav structure with dropdowns, light theme, logo
- `src/components/Footer.tsx` -- updated links, light-compatible footer
- `src/pages/Index.tsx` -- completely restructured home page
- `src/components/HeroSection.tsx` -- light theme + glassmorphism redesign

### Files to remove/replace:
- `src/components/SpecializzazioniSection.tsx` -- removed (replaced by service pages)

### Images (Unsplash):
Each page will use 2-3 high-quality professional images sourced from Unsplash, matching the light professional aesthetic. City pages use landmark/cityscape photos.

