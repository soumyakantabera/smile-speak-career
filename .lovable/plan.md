
# Redesign: Navbar, City Images, Page Images, Pricing Update

## Overview
Complete navbar redesign with enhanced glassmorphism, fix city image links, add compelling images to every page, and update pricing to Starter EUR 9 / Professional EUR 49.

---

## 1. Navbar Redesign

Replace the current basic glass navbar with a premium, modern design:

- **Top bar**: Thin teal gradient accent line (already exists, keep it)
- **Non-scrolled state**: `bg-white/80 backdrop-blur-2xl` with a subtle bottom border for contrast against any hero image
- **Scrolled state**: `bg-white/95 backdrop-blur-2xl shadow-xl` with slight padding reduction
- **Logo**: Keep current Logo component
- **Nav links**: Increase spacing, add hover underline animation (teal gradient underline slides in from left)
- **Dropdowns**: Redesign with glassmorphism (`glass-strong` class), larger padding, subtle teal left-border on hover for each item, and smooth entry animation
- **CTA button**: Keep gradient-orange rounded-full button, add subtle glow pulse on hover
- **Mobile menu**: Full glass overlay with smooth slide-down animation, larger touch targets, service descriptions in mobile dropdown items

### Key visual improvements:
- Always-visible navbar background (no more transparency issues over hero images)
- Dropdown menus with glass effect instead of plain white
- Active link indicator: teal dot below text instead of full underline
- Cleaner spacing and typography hierarchy

---

## 2. Fix City Image Links

The city images in `src/data/cities.ts` use Unsplash URLs which should work fine. The issue is likely:
- Some Unsplash image IDs may be invalid/removed
- Will verify and replace any broken image URLs with confirmed working Unsplash photos:
  - Milano: Duomo/skyline
  - Roma: Colosseum
  - Torino: Mole Antonelliana (current ID `1614531341773-3bff8b7cb3fc` may be broken -- replace)
  - Firenze: Duomo/Ponte Vecchio (current ID `1543429776-2782fc8e5a06` may be broken -- replace)
  - Bologna: Piazza Maggiore (current ID `1598971639058-999690271e1e` may be broken -- replace)
  - Napoli: Gulf view (current ID `1516483638261-f4dbaf036963` may be broken -- replace)

Will use verified, high-quality Unsplash URLs for all cities.

---

## 3. Add Images to Every Page

### Pages needing image enhancements:

**Prezzi page** (`Prezzi.tsx`):
- Add a hero section with a professional image background (glassmorphism overlay)
- Add a decorative image between pricing cards and FAQ

**Contatti page** (`Contatti.tsx`):
- Add a hero image with gradient overlay (professional workspace/team image)
- Add a secondary image in the contact info sidebar

**Chi Siamo page** (`ChiSiamo.tsx`):
- Already has images -- verify they load correctly
- Add team member photos (Unsplash professional headshots)

**Problem pages** (`ProblemPage.tsx`):
- Already have hero + secondary images -- verify all 8 problem image URLs work
- Replace any broken ones

**Service pages** (`ServicePage.tsx`):
- Already have hero + secondary images -- verify all 4 service image URLs work

**Homepage** (`Index.tsx`):
- Already has images -- verify hero image loads
- Add a testimonial section image

---

## 4. Update Pricing

Update prices across two locations:

**`src/pages/Prezzi.tsx`**: Change Starter from EUR 49 to EUR 9, Professional from EUR 189 to EUR 49

**`src/pages/Index.tsx`** (homepage pricing preview): Same price updates -- Starter EUR 9, Professional EUR 49

---

## 5. Make Website More "Catchy"

- Add subtle floating decorative elements (gradient blurs) to key sections
- Enhance CTA buttons with micro-interactions (scale + shadow on hover)
- Add a "trust bar" or social proof strip below the homepage hero
- Improve the ProblemsSection with images/thumbnails for each problem card

---

## Technical Details

### Files to modify:
- `src/components/Header.tsx` -- Complete navbar redesign
- `src/data/cities.ts` -- Fix broken image URLs
- `src/pages/Prezzi.tsx` -- Add hero image, update prices (9/49)
- `src/pages/Index.tsx` -- Update pricing preview (9/49), add visual enhancements
- `src/pages/Contatti.tsx` -- Add hero image section
- `src/index.css` -- Add new animation utilities if needed

### No new files needed -- all changes are modifications to existing components and data.
