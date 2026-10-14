# Orbit Soft Lab - Website (Next.js Frontend)

Frontend built from the Figma design "Orbit soft lab" (home page). Backend (Node/Express + MongoDB) can be added later; the frontend is ready for API integration.

## Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS 3
- lucide-react icons
- Fonts: Poppins (headings) + Inter (body) via Google Fonts

## Run
```bash
npm install
npm run dev
```
Open http://localhost:3000

Production: `npm run build && npm start`

## Structure
```
app/            layout.tsx, page.tsx, globals.css
components/     Navbar, Hero, About, Services, Projects, Process, Testimonials,
                TechStack, Team, WhyUs, FAQ, CTA, Footer, SectionHeading, Logo
data/site.ts    all page content (edit text, links, tags here)
lib/api.ts      placeholder for backend API URL
public/images/  placeholder images (replace with Figma exports, same file names)
```

## Images
Figma assets could not be downloaded automatically, so `public/images/` holds dark placeholder images with the exact file names the components use:
- hero.jpg, cta.jpg
- about-1.jpg, about-2.jpg, about-3.jpg
- service-1.jpg ... service-6.jpg
- project-1.jpg ... project-4.jpg

Export the real images from Figma and overwrite these files. No code change needed.

## Design tokens (tailwind.config.ts)
- Background: `#131514` (ink), `#0B0B0B` (ink-deep), cards `#161816`
- Accent: `#B2EC36` (lime), `#72CD32` (lime-dark)
- Body text: `rgba(254,254,254,0.7)`

## Adding the backend later
- Put API calls in `lib/` and read `process.env.NEXT_PUBLIC_API_URL` (see `.env.example`)
- Contact form / project data can replace the static arrays in `data/site.ts`
