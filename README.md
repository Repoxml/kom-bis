# KOM-BIS — strona firmowa

Jednostronicowa witryna wizytówkowa dla firmy świadczącej usługi komunalne w Trójmieście (pielęgnacja terenów zielonych, odśnieżanie, wywóz gruzu, sprzątanie).

**Demo na żywo:** [kom-bis.vercel.app](https://kom-bis.vercel.app/)

## Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- Hosting: [Vercel](https://vercel.com/)

## Funkcje

- Responsywny układ (mobile-first)
- Sekcje: hero z CTA, oferta usług, o firmie, kontakt
- Bezpośrednie odnośniki do telefonu i e-maila
- Auto-deploy na Vercel przy każdym pushu do gałęzi `master`

## Uruchomienie lokalne

```bash
# instalacja zależności
npm install

# serwer deweloperski (http://localhost:3000)
npm run dev

# build produkcyjny
npm run build
npm start
```

## Status

Projekt w rozwoju. Planowane: formularz kontaktowy, własna domena, logo i inne zdjecia.
