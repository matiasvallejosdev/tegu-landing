# Tegu Landing Page - Build Specification

## Project Overview

Build a professional landing page for **Tegu**, an AI-first home services marketplace connecting clients with service professionals in Argentina. The design should blend Apple's clean, minimal aesthetic with the warmth and personality of Tegu's friendly lizard mascot.

---

## Brand Identity

### Brand Name

**Tegu** (alternate spelling: Tegü)

### Vision Statement

"El ecosistema que convierte tareas en oportunidades, conectando personas y trabajo de manera simple y segura."

### Brand Personality

- Modern & Innovative (AI-powered, tech-forward)
- Warm & Approachable (friendly mascot, human connection)
- Premium & Trustworthy (secure, reliable)
- Simple & Efficient (no-nonsense, fast)

### Mascot

Tegu is a friendly blue/purple lizard character. The mascot adds warmth and approachability while maintaining a modern, polished feel. Use mascot illustrations strategically - not overwhelming, but as personality anchors.

### Color Palette

```css
/* Primary - Blues */
--primary: #5B6EE1;          /* Main mascot blue */
--primary-dark: #4A5BC7;     /* Darker blue accents */
--primary-light: #7B8FFF;    /* Lighter blue highlights */

/* Secondary - Purples */
--secondary: #9B7ED9;        /* Soft purple */
--secondary-light: #C4B5F0;  /* Lavender tones */

/* Accent */
--accent-pink: #E8A4C4;      /* Ear pink, subtle accents */
--accent-cyan: #A8E6F0;      /* Gradient endpoint */

/* Gradients */
--gradient-hero: linear-gradient(135deg, #C4B5F0 0%, #A8E6F0 100%);
--gradient-card: linear-gradient(180deg, #F0EDFF 0%, #E8F7FA 100%);

/* Neutrals */
--background: #FFFFFF;
--background-secondary: #F8F9FF;    /* Slight purple tint */
--text-primary: #2D2A5E;            /* Deep purple-blue */
--text-secondary: #6B6B8D;
--border: #E8E8F0;
```

### Typography Direction

- Modern sans-serif: Inter, SF Pro, or similar
- Large, bold headlines
- Generous whitespace
- Deep purple-blue text for warmth (not pure black)

---

## Available Brand Assets

Reference these illustrations in the design:

| Asset | File | Recommended Use |
|-------|------|-----------------|
| Logo with text | `tegu-logo2.png` | Navigation, footer |
| Logo icon only | `tegulogo.png` | Favicon, app icon |
| Greeting pose | `tegu-hi.png` | Hero section, welcome |
| Helping/working | `tegu-helping.png` | Provider value prop, "How it works" |
| Relaxed/chill | `tegu-chill.png` | Client value prop, ease of use |
| Earning money | `tegu-earn.png` | Provider benefits, payment section |
| Form/clipboard | `tegu-form.png` | Waitlist signup, registration |
| Phone/calling | `tegu-calling.png` | Communication, matching |
| Review clipboard | `tegu-review.png` | Trust, verification, ratings |

---

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Animations:** Minimal CSS transitions only
- **Performance:** Static generation, optimized images

---

## Page Structure

### 1. Navigation

- Fixed minimal header with subtle blur backdrop
- Logo (tegu-logo2.png) left
- Single CTA button right: "Unirme a la lista"
- Background becomes solid on scroll

### 2. Hero Section

**Layout:** Centered text, Apple-style minimal

**Visual:** Tegu mascot (tegu-hi.png) positioned subtly - either small beside headline or as background element with low opacity

```
[Centered]

Tegu

El futuro de los servicios del hogar

Conectamos talento verificado con quienes lo necesitan.
Impulsado por inteligencia artificial.

[CTA Button: Unirme a la lista de espera]

[Subtle mascot illustration]
```

- Soft gradient background (lavender to cyan)
- Generous padding (min 50vh)
- Mascot adds personality without overwhelming

### 3. Dual Value Proposition

Split section showing value for both audiences:

**Left Card - Para quienes buscan servicios**

- Illustration: `tegu-chill.png` (relaxed, easy experience)
- Profesionales verificados
- IA que encuentra el match perfecto
- Proceso simple y rapido

**Right Card - Para quienes ofrecen servicios**

- Illustration: `tegu-earn.png` (earning opportunity)
- Acceso a oportunidades reales
- Perfiles que generan confianza
- Cobra de forma segura

### 4. How It Works

Tabbed or side-by-side flow for both user types:

**Clientes:**

1. Describi tu tarea → `tegu-calling.png`
2. Recibi ofertas verificadas → `tegu-review.png`
3. Elegi y contrata con confianza → `tegu-chill.png`

**Prestadores:**

1. Crea tu perfil profesional → `tegu-form.png`
2. Encontra tareas que coincidan → `tegu-calling.png`
3. Trabaja y cobra seguro → `tegu-earn.png`

### 5. Features Grid

Three cards with icons (can use simplified mascot poses or custom icons):

**1. IA que conecta**

- Matching inteligente entre necesidades y habilidades

**2. Profesionales verificados**

- Illustration hint: `tegu-review.png`
- Perfiles validados y reputacion real

**3. Simple y rapido**

- De la idea al trabajo en minutos

### 6. Waitlist Form (Multi-step)

Progressive form with mascot guidance:

**Step 1: Email input**

- Illustration: `tegu-hi.png` greeting

**Step 2: Role selection**

- "Que te trae a Tegu?"
- Options: Busco servicios / Ofrezco servicios / Ambos
- Illustration: `tegu-form.png`

**Step 3: Success**

- Celebration message
- Show waitlist position
- Illustration: `tegu-earn.png` or happy pose

### 7. FAQ Section

Collapsible accordion, clean design:

- Que es Tegu?
- Cuando estara disponible?
- En que ciudades operara?
- Es gratis?
- Como se verifican los profesionales?

### 8. Footer

- Logo: `tegu-logo2.png`
- Legal links
- Social links (if available)
- "Hecho con amor en Argentina"

---

## Design Principles

### Apple + Mascot Balance

1. **Clean layouts** - Generous whitespace, clear hierarchy
2. **Mascot as accent** - Not cartoon overload; strategic placement
3. **Soft gradients** - Purple/blue/cyan flows, not harsh
4. **Typography first** - Let text breathe, mascot supports
5. **Subtle depth** - Soft shadows, glass effects on cards

### Specific Guidelines

- Cards: Rounded corners (16-24px), subtle gradient fills
- Buttons: Rounded (12px), primary blue fill, white text
- Mascot illustrations: Max 200-300px, never competing with text
- Sections: Alternating white / soft gradient backgrounds
- Mobile: Stack cards, reduce mascot size, maintain readability

---

## Image Optimization

All mascot PNGs should be:

- Converted to WebP with PNG fallback
- Served via Next.js Image component
- Lazy loaded below the fold
- Sized appropriately per breakpoint

---

## Constraints

- No heavy animation libraries
- No carousel/sliders
- Performance budget: Lighthouse 95+
- Mascot usage: Strategic, not overwhelming (max 1 per viewport)

---

## Deliverables

1. Complete Next.js + Tailwind project
2. Responsive design (mobile-first)
3. All mascot assets integrated
4. Multi-step waitlist form with state
5. SEO meta tags + Open Graph (use logo for OG image)
6. Accessible (WCAG 2.1 AA)
