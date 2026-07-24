# Old Colony Wiring — Website Design Document

## Business Details
- **Business Name:** Old Colony Wiring
- **Domain:** oldcolonywiring.com
- **Address:** 26 Wiggins Ave, Bedford, MA 01730
- **Phone:** (781) 200-5745
- **Niche:** Residential & Commercial Electrician
- **Primary Market:** Bedford, MA and surrounding Middlesex County towns

## Three Design Approaches Considered

### Approach A — "Colonial Craftsman" (Probability: 0.05)
Warm, heritage-inspired design drawing from New England's colonial architecture. Earthy tones, serif typography, and handcrafted textures. Positions the brand as a trusted local institution.

### Approach B — "Industrial Precision" (Probability: 0.07)
Dark steel backgrounds, technical grid overlays, and monospace accents. Emphasizes engineering expertise and precision. Masculine, authoritative, and technical.

### Approach C — "Navy & Amber Authority" ← CHOSEN (Probability: 0.03)
Deep navy blue as the commanding primary color paired with electric amber/gold as the conversion accent. Clean, structured, and professional — communicates reliability and expertise without the overused red of most competitors. Asymmetric layout with strong typographic hierarchy.

---

## Chosen Design: "Navy & Amber Authority"

### Design Movement
Modern American Craftsman meets Corporate Precision — structured, trustworthy, and conversion-focused.

### Core Principles
1. **Navy Blue as the Authority Color** — Deep navy (#1B2A4A) signals trust, expertise, and professionalism. Used for headers, dark sections, and primary backgrounds.
2. **Amber Gold as the Action Color** — Electric amber (#F5A623) is used exclusively for CTAs, highlights, and conversion elements. High contrast, high urgency.
3. **White Space as Breathing Room** — Generous padding and clear section breaks prevent visual clutter and guide the eye toward calls to action.
4. **Asymmetric Layouts** — Offset text/image compositions, diagonal section dividers, and staggered card grids break the generic centered-layout mold.

### Color Philosophy
- **Primary (Navy):** `#1B2A4A` — Deep, commanding, trustworthy. The color of a licensed professional's uniform.
- **Accent (Amber Gold):** `#F5A623` — Electric, urgent, action-oriented. The color of electricity itself.
- **Light Background:** `#F8F9FC` — Near-white with a subtle cool undertone for content sections.
- **Dark Section:** `#0F1A30` — Near-black navy for high-contrast "Why Choose Us" sections.
- **Text:** `#1A1A2E` — Deep navy-black for body copy.
- **Muted Text:** `#6B7280` — Gray for secondary information.

### Layout Paradigm
- Full-width hero with left-aligned text and right-side trust bar
- Diagonal/angled section transitions using CSS clip-path
- 3-column service grid with hover-lift cards
- Asymmetric about section (image left, text right with offset)
- Sticky header that transitions from transparent to solid navy on scroll

### Signature Elements
1. **Amber CTA Buttons** — All primary CTAs use amber gold with navy text for maximum contrast
2. **Navy Section Dividers** — Angled clip-path transitions between white and navy sections
3. **Lightning Bolt Accent** — Subtle lightning bolt motif used in section headers and decorative elements

### Interaction Philosophy
- Buttons scale slightly on hover (transform: scale(1.02))
- Cards lift with shadow on hover
- Smooth scroll behavior throughout
- Mobile sticky call bar appears on scroll

### Animation
- Fade-in-up on section entry (Framer Motion)
- Staggered card reveals (30ms delay per card)
- Header background transition on scroll (200ms ease-out)
- CTA button pulse animation to draw attention

### Typography System
- **Display/Headings:** Oswald (Google Fonts) — Bold, condensed, authoritative
- **Body:** Source Sans 3 (Google Fonts) — Clean, readable, professional
- **Accent:** Oswald Medium for subheadings and labels
- **H1:** 56px / 700 weight / tight tracking
- **H2:** 40px / 600 weight
- **H3:** 24px / 600 weight
- **Body:** 16px / 400 weight / 1.7 line height

### Brand Essence
**"Bedford's most trusted electrician — licensed, local, and built for New England homes."**
Personality: Reliable, Expert, Neighborly

### Brand Voice
- Direct and confident: "Your home's electrical system is not the place to cut corners."
- Local and personal: "We've wired homes in Bedford, Lexington, and Concord for years."
- Action-oriented CTAs: "Call Now for a Free Estimate" / "Get Wired Right — Call Today"

### Wordmark & Logo
Lightning bolt in a circular plug motif, paired with "OLD COLONY WIRING" in Oswald Bold. Navy and amber on white; white and amber on navy.

### Signature Brand Color
Electric Amber `#F5A623` — unmistakably Old Colony Wiring's action color.

---

## Style Decisions
- All CTA buttons use amber (#F5A623) with navy text (#1B2A4A) for maximum contrast and brand consistency
- Section dividers use diagonal clip-path cuts (not waves) for a more structured, industrial feel
- Phone number is always displayed in amber in the header
- Mobile sticky call bar uses amber background with navy text
- Trust badges use white icons on navy background cards
