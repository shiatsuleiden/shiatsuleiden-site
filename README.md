# shiatsuleiden.nl

Statische Astro 5-versie van de website van Shiatsu Leiden. Tekst, foto's en ontwerp zijn eigendom van de praktijkhouder.

- Inhoud aanpassen: zie [HOW-TO-CHANGE-CONTENT.md](HOW-TO-CHANGE-CONTENT.md)
- Hosting: Netlify (build `npm run build`, publiceert `dist/`)
- Oude adressen blijven werken (`build.format: 'file'` geeft `/behandeling.html` enzovoort)

## Opbouw

| Pad | Wat |
|---|---|
| `src/layouts/Base.astro` | kop, menu, voettekst en de tabel-opmaak (gelijk aan het origineel) |
| `src/page-content/*.html` | de tabelrijen met de inhoud per pagina |
| `src/data/pages.json` | titel, beschrijving en trefwoorden per pagina |
| `src/data/menu.json` | menu en voettekst-links |
| `public/stylesheet.css` | originele CSS, ongewijzigd |
| `public/mobile.css` | extra opmaak voor schermen smaller dan 760px |
| `public/afbeeldingen/`, `public/*.pdf` | originele afbeeldingen en pdf's, byte-voor-byte |

De originele pagina's hadden geen `<!DOCTYPE>` en renderen dus in *quirks mode*. De opmaak hangt daarvan af. `astro.config.mjs` haalt de doctype die Astro toevoegt na het bouwen weer weg.

Getest: op 1280px pixel-identiek aan het origineel, met deze uitzonderingen: kapotte tekens hersteld (Oekraïense, Ménière, therapieën) en gelijke spaties rond `|` in menu en voettekst van de contactpagina.
