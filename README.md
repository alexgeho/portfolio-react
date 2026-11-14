# Portfolio – Alexander Gerhard

Min portfolio, byggd som en one-page React single page application.
Sidan presenterar mig som utvecklare och visar mina projekt som kort med bild, titel,
beskrivning, teknik-taggar och länkar till repo och live-demo. Projekten går att filtrera
på teknik-tagg.

Inlämningsuppgift 1 i kursen JavaScript ramverk (FED25D).

- **Live:** https://portfolio-react-red-iota.vercel.app
- **Figma-skiss (mobil och desktop):** _länk läggs till här_

## Sektioner

- **Hem** – presentation
- **Om mig** – kort om mig, kompetenser och erfarenhet
- **Projekt** – sex projekt i en karusell, med filter på teknik-tagg
- **Kontakt** – e-post, WhatsApp, LinkedIn och GitHub

Navigationen längst ner på sidan länkar till Hem, Projekt, Om mig och Kontakt.

## Tech stack

- React + TypeScript via Vite (komponenter, props, state och hooks)
- SCSS
- Figma för skisser av mobil och desktop
- Git + GitHub
- Vercel för driftsättning

## Köra projektet lokalt

```bash
npm install
npm run dev
```

Öppna sedan http://localhost:5173.

```bash
npm run build   # bygger sidan till mappen dist
```

## Struktur

```
src/
  data/projects.ts         all projektdata och typen Project
  components/
    Projects/
      Projects.tsx         sektionen: filter-state, karusell och modal
      ProjectFilter.tsx    filterknapparna (får taggar och vald tagg via props)
      ProjectCard.tsx      ett projektkort (får sitt projekt via props)
    Hero/, About/, Skills/, Footer/, FloatingNav/ ...
  styles/                  variabler och globala stilar
```

## State och filter

- Projektdatan ligger i `src/data/projects.ts` och renderas med `.map()`.
- `Projects` har ett state, `selectedTag`, med den valda teknik-taggen ("Alla" visar alla projekt).
- Den filtrerade listan sparas inte i ett eget state. Den räknas fram vid varje rendering
  med `projects.filter(...)`.
- `ProjectFilter` och `ProjectCard` får sin data via props.
- Annan state: vilket projekt som är öppet i "Läs mer"-fönstret, karusellens position
  och aktiv länk i navigationen.

## Ändringar från skissen

_Beskrivs här när Figma-länken är tillagd._
