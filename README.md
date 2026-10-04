# TIS — Advanced Frontend Developer Assessment

An animated redesign of the Tulas International School homepage built with React, Vite, Tailwind CSS and Framer Motion.

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- Responsive CSS
- Semantic HTML

## Features

- Responsive desktop/tablet/mobile layout
- Animated hero
- Scroll-triggered reveal animations
- Interactive custom cursor on desktop
- Scroll progress indicator
- Dark/light theme toggle
- Mobile navigation
- Hover micro-interactions
- Reduced-motion accessibility support
- Reusable section/component architecture
- External TIS admissions CTA

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown by Vite, normally:

http://localhost:5173

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this project to GitHub.
2. Import the repository into Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy.

## Project structure

```text
src/
├── components/
├── data/
├── hooks/
├── sections/
├── App.jsx
├── main.jsx
└── index.css
```

## Assessment notes

The page uses the school's publicly available positioning and content themes. Verify all copy, images and links against the current TIS website before final submission.

TIS website: https://tis.edu.in/
Admissions: https://admission.tis.edu.in/
