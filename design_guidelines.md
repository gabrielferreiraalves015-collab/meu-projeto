# Design Guidelines: Magnesium Supplement Landing Page

## Design Approach
**Reference-Based: Health & Wellness E-commerce**
Drawing inspiration from premium supplement brands like Ritual, Athletic Greens, and Care/of - combining scientific credibility with approachable wellness aesthetics. Focus on trust-building through clean design, strategic use of white space, and authoritative yet friendly tone.

## Core Design Elements

### A. Color Palette
**Light Mode:**
- Primary: 160 45% 35% (Deep teal-green - health, trust, vitality)
- Secondary: 160 35% 92% (Soft mint background)
- Accent: 35 85% 55% (Warm coral for CTAs - energy, action)
- Text: 160 20% 15% (Dark slate)
- Muted: 160 10% 96% (Near-white backgrounds)

**Dark Mode:**
- Primary: 160 50% 65% (Lighter teal)
- Background: 160 15% 12% (Deep slate)
- Surface: 160 12% 18% (Card backgrounds)
- Accent: 35 75% 60% (Softer coral)
- Text: 160 5% 95% (Off-white)

### B. Typography
**Font Families:**
- Headings: Inter (700, 600) - modern, trustworthy, scientific
- Body: Inter (400, 500) - excellent readability
- Accent/Stats: Inter (800) - bold numbers and highlights

**Scale:**
- Hero H1: text-5xl md:text-7xl (bold)
- Section H2: text-3xl md:text-5xl (semibold)
- H3: text-2xl md:text-3xl (semibold)
- Body: text-base md:text-lg
- Small/Captions: text-sm

### C. Layout System
**Spacing Primitives:** Use Tailwind units of 4, 8, 12, 16, 20, 24
- Section padding: py-16 md:py-24
- Container: max-w-7xl mx-auto px-4
- Card spacing: p-8 md:p-12
- Element gaps: gap-8 md:gap-12

**Grid Patterns:**
- Features/Benefits: grid-cols-1 md:grid-cols-3 gap-8
- Testimonials: grid-cols-1 md:grid-cols-2 gap-12
- Pricing: grid-cols-1 md:grid-cols-3 gap-6

### D. Component Library

**Hero Section:**
- Two-column split (60/40): Left text + CTA, Right product image with subtle gradient backdrop
- Large hero image of supplement bottle with natural elements (leaves, water)
- Headline emphasizing transformation/benefit
- Subheadline with scientific backing
- Primary CTA button (accent color) + secondary text link
- Trust indicators immediately below (5-star rating, customer count, certifications)

**Trust Badges:**
- Horizontal row of 4-5 icons: FDA Approved, GMP Certified, Third-Party Tested, Money-Back Guarantee, Free Shipping
- Icons in primary color with supporting text below
- Contained in subtle bordered cards (border-primary/20)

**Problem Section:**
- Dark background (bg-slate-900 or primary-dark) for contrast
- Centered headline with emotional pain points
- 3-column grid of problem cards with icons
- Each card: icon (X mark or alert), problem statement, brief description

**Magnesium Forms Section:**
- Clean white/light background
- Educational tone with comparison table
- 4-6 different magnesium types in card format
- Each card: form name, key benefits (bullet points), bioavailability indicator
- Highlight the product's specific form with accent border

**Product Info:**
- Split layout: Product image gallery left (3-4 angles), specifications right
- Key features with checkmark icons in primary color
- Ingredient list with dosage information
- Scientific backing with research citations (linked)
- Supplement facts table styled as clean data grid

**Pricing Section:**
- 3-tier pricing cards with middle option elevated (shadow-2xl, scale-105)
- Best value badge on recommended option (accent color, absolute positioned)
- Each tier: package name, price (large, bold), savings percentage, features list, CTA button
- Annual savings calculation displayed prominently
- Payment icons below (Visa, Mastercard, PayPal, etc.)

**Guarantee Section:**
- Centered with large badge/seal graphic
- "100-Day Money-Back Guarantee" headline
- Reassuring copy explaining no-questions-asked policy
- Trust-building imagery (shield, checkmark circle)
- Subtle background pattern or gradient

**Testimonials:**
- 2-3 column grid of testimonial cards
- Each card: customer photo (rounded-full), quote, name, rating stars, verification badge
- Rotate between lifestyle photos and headshots
- Include specific results/benefits mentioned

**Final CTA:**
- Full-width section with gradient background (primary to secondary)
- Large headline reinforcing main benefit
- Urgency element (limited time offer, stock counter)
- Prominent CTA button with arrow icon
- Risk-free guarantee reminder below button

**Footer:**
- Multi-column layout: Logo + tagline, Quick Links, Customer Service, Legal, Newsletter signup
- Social media icons
- Payment method icons
- Copyright and certifications
- Background: muted dark (slate-800)

### E. Visual Elements

**Images Required:**
1. **Hero Image:** Premium supplement bottle on clean background with natural elements (water splash, green leaves), professional product photography
2. **Product Gallery:** 3-4 angles of bottle, supplement facts label close-up, size comparison
3. **Lifestyle Images:** 2-3 images showing active, healthy individuals (morning routine, exercise, wellness)
4. **Testimonial Photos:** 6-8 diverse customer headshots, authentic and relatable
5. **Trust Icons:** FDA, GMP, third-party testing badges (SVG format)
6. **Guarantee Badge:** Shield or seal graphic for money-back guarantee

**Icon Strategy:**
Use Heroicons (outline style) via CDN for:
- Checkmarks (benefits, features)
- X marks (problems)
- Stars (ratings)
- Shield (guarantee)
- Truck (shipping)
- Scientific/beaker icons (forms section)

### F. Interaction Design
**Minimal, Purposeful Animations:**
- Scroll-triggered fade-ins for sections (once only)
- Hover lift on pricing cards (translate-y-1)
- Button hover states (built-in, no custom needed)
- Smooth scroll behavior for anchor links
- No autoplay carousels or distracting motion

**Accessibility:**
- Maintain WCAG AA contrast ratios (4.5:1 for text)
- Focus visible states for keyboard navigation
- Alt text for all product/lifestyle images
- Semantic HTML structure
- Dark mode toggle in header (sun/moon icon)

## Layout Strategy
- Natural content flow, no forced viewport heights except hero (min-h-screen)
- Vertical rhythm: consistent py-16 md:py-24 for sections
- Strategic white space between major sections (divide-y with subtle borders)
- Responsive breakpoints: mobile-first, tablet at md:, desktop at lg:
- Content max-width: prose for text blocks, 7xl for full sections

**Quality Mandate:** This design prioritizes trust and conversion through professional polish, scientific credibility, and user-friendly information hierarchy. Every section serves a purpose in the customer journey from awareness to purchase decision.