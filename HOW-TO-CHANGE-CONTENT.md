# Inhoud aanpassen op shiatsuleiden.nl

Een korte handleiding voor als je vergeten bent hoe het werkt.

## Het idee in één alinea

Alle bestanden van de website staan op GitHub, in de private repository **github.com/shiatsuleiden/shiatsuleiden-site** (organisatie `shiatsuleiden`, beheerd door keesjalink). Zodra daar iets verandert, bouwt Netlify de site automatisch opnieuw en zet hem online. Dat duurt ongeveer 1 minuut. Er komt geen FTP of upload bij kijken: je past een bestand aan op GitHub en de site werkt zichzelf bij.

De makkelijkste manier is **rechtstreeks op de GitHub-website bewerken**. Daarvoor hoef je niets te installeren.

---

## A. Tekst op een bestaande pagina aanpassen (meest voorkomend)

1. Ga naar **https://github.com/shiatsuleiden/shiatsuleiden-site** en log in.
2. Klik op de map **`src`** en daarna op **`page-content`**.
3. Elke pagina heeft daar een eigen bestand:

   | Bestand | Pagina | Adres |
   |---|---|---|
   | `home.html` | Home (met de tarieven rechts) | `/` en `/index.html` |
   | `behandeling.html` | Behandeling | `/behandeling.html` |
   | `buteyko-therapie.html` | Buteyko | `/buteyko-therapie.html` |
   | `iemt.html` | IEMT | `/iemt.html` |
   | `contact.html` | Contact | `/contact.html` |

4. Klik op het bestand en daarna rechtsboven op het **potlood-icoon ✏️** ("Edit this file").
5. Pas de tekst aan. Het is HTML, maar je hebt maar een paar codes nodig:
   - `<p>tekst</p>`: een alinea
   - `<strong>vet</strong>` of `<b>vet</b>`, `<em>schuin</em>`
   - `<br>`: een nieuwe regel binnen een alinea
   - `<a href="https://...">linktekst</a>`: een link
   - `&euro;` voor €, `&euml;` voor ë, `&eacute;` voor é (je mag ook gewoon € ë é typen)

   **Laat de tabelcodes staan** (`<tr>`, `<td ...>`, `</td>`, `</tr>`) en zorg dat elke `<p>` weer een `</p>` heeft. De opmaak van de site is één grote tabel uit 2000-en-zoveel. Verander je alleen de tekst *tussen* de codes, dan blijft alles op zijn plek.
6. Klik rechtsboven op de groene knop **Commit changes...**, typ een korte omschrijving (bijvoorbeeld "tarieven 2027") en klik nog een keer op **Commit changes**.
7. Wacht ongeveer een minuut en herlaad de pagina. Je wijziging staat online.

### Waar staat wat?

- **Tarieven** staan in `home.html`, in het blok dat begint met `<td rowspan="3" class="navm_r">`.
- **E-mailadres en telefoonnummer** staan op meerdere pagina's (home, buteyko, contact). Zoek in elk bestand op `071-` of `luppe@` en pas ze overal aan.
- **Het jaartal in de voettekst** ("© 2025") staat in `src/layouts/Base.astro`. Zoek op `2025`.

---

## B. Een pdf of afbeelding toevoegen

1. Ga op GitHub naar de map **`public`** (pdf's) of **`public/afbeeldingen`** (plaatjes).
2. Klik op **Add file → Upload files**, sleep je bestand erin en klik op **Commit changes**.
3. Het bestand staat dan online op `https://shiatsuleiden.nl/bestandsnaam.pdf` (of `/afbeeldingen/plaatje.jpg`).
4. Zet er een link naar op een pagina (zie A):
   - pdf: `<a href="bestandsnaam.pdf" target="_blank">Lees de voorwaarden</a>`
   - afbeelding: `<img src="afbeeldingen/plaatje.jpg" width="200" alt="korte omschrijving">`

Tip: gebruik bestandsnamen zonder spaties (bijvoorbeeld `Tarieven_2027.pdf`).

Een pdf **vervangen** door een nieuwere versie: upload hem met precies dezelfde naam. GitHub overschrijft dan de oude, en alle links blijven werken.

---

## C. Paginatitel of menu aanpassen

- **Titel in het browsertabblad en beschrijving voor Google**: `src/data/pages.json`.
- **Het menu bovenaan en de links in de voettekst**: `src/data/menu.json`. Elke regel is één menu-item (`label` = tekst in het menu, `footer` = tekst in de voettekst).

Een **nieuwe pagina** toevoegen is wat meer werk (een nieuw bestand in `src/page-content/`, een regel in `pages.json` en `menu.json`, en een klein bestand in `src/pages/`). Kopieer daarvoor bijvoorbeeld de bestanden van `iemt`, of vraag Claude om hulp.

---

## D. Iets ging mis

- **De site is niet bijgewerkt**: kijk op app.netlify.com bij de site onder **Deploys**. Een rode "Failed" betekent dat er een fout in je wijziging zit. Klik erop voor de foutmelding.
- **Een wijziging terugdraaien**: open op GitHub het bestand, klik op **History**, kies de vorige versie en kopieer de oude tekst terug. Op Netlify kun je ook een eerdere deploy aanklikken en **Publish deploy** kiezen. Dan staat de oude versie direct weer online.
- **De opmaak is ineens kapot**: meestal is er een `</td>` of `</tr>` weggevallen. Vergelijk via **History** met de vorige versie.

---

## E. Op je eigen computer werken (optioneel)

Nodig: Node.js en Git.

```bash
npm install
npm run dev      # voorbeeld op http://localhost:4321, ververst vanzelf
npm run build    # bouwt de site in de map dist/
```

Daarna `git add`, `git commit` en `git push` vanuit een terminalvenster. Netlify doet de rest.

---

## Goed om te weten

- **E-mail** (luppe@shiatsuleiden.nl) loopt via PCextreme en heeft niets met Netlify te maken. Als het domein naar Netlify wordt omgezet, verander dan **alleen** het A-record en `www`. Laat de MX- en TXT-records (SPF) staan, anders werkt de e-mail niet meer.
- De oude adressen (`/behandeling.html` enzovoort) werken nog precies zoals vroeger.
- Op een computer ziet de site er hetzelfde uit als de oude. Op een telefoon worden de kolommen onder elkaar gezet. Dat regelt `public/mobile.css`. Het originele `public/stylesheet.css` is ongewijzigd.
- In `_archive-original/` (alleen lokaal, niet op GitHub) staat een kopie van de oude site zoals die op 15-11-2026 online stond.
