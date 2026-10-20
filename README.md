# Forno Fossati — demo commerciale non ufficiale

Sito statico Astro + Tailwind CSS, in italiano. Progetto indipendente, non affiliato né autorizzato dal panificio. Dati e assortimento richiedono conferma del titolare. La demo resta esclusa dall’indicizzazione tramite `robots.txt` e meta robots.

## Avvio

Richiede Node.js 22.12+ (ambiente verificato con Node 24) e npm.

```sh
npm ci --cache /workspace/.npm-cache
npm run dev
```

Fuori dall’ambiente cloud, usare `npm ci` con la cache predefinita. Il server di sviluppo usa la porta 4321. `npm run check` verifica Astro e TypeScript; `npm run build` genera `dist/`; `npm run preview` serve la build per una verifica locale. Nessuna chiave o variabile segreta richiesta.

## Pubblicare una preview

Caricare il repository su un servizio di hosting statico (per esempio Netlify, Cloudflare Pages o Vercel), impostare `npm run build` come comando e `dist` come cartella pubblicata. In alternativa caricare direttamente il contenuto di `dist/` sul proprio hosting statico. Nessun adapter o backend necessario. Usare una preview separata dal dominio ufficiale e mantenere gli avvisi della demo.

Impostare `SITE_URL` all’URL HTTPS reale della preview prima della build per generare URL assoluti Open Graph e canonical corretti. Esempio: `SITE_URL=https://preview.example.com npm run build`. L’URL non è inventato né preconfigurato. L’immagine OG relativa è un fallback per lo sviluppo locale.

## Personalizzare il template

- `src/data/site.ts`: identità, contatti, orari, navigazione, testi principali, prodotti, avvisi e SEO. Tutti i dati commerciali sono da verificare.
- `src/components/`: intestazione e navigazione responsive, titoli di sezione e immagini responsive riutilizzabili.
- `src/pages/index.astro`: composizione semantica della pagina e metadati.
- `src/styles/global.css`: basi responsive e accessibilità. `src/styles/bottega.css`: direzione visiva “bottega di quartiere”, carta, cartellini e foto sfalsate. Nessun font esterno. Entrambi rispettano `prefers-reduced-motion`.
- `public/images/`: risorse WebP locali a 640, 1000 e 1536 pixel. Nessuna richiesta a servizi fotografici o font esterni.

Per un futuro sito ufficiale: ottenere autorizzazione, verificare dati e copy, sostituire le immagini illustrative con materiale approvato, rivedere note legali e impostazioni di indicizzazione. Non rimuovere gli avvisi nella demo.

## Immagini e diritti

Le tre immagini sono state generate appositamente con OpenAI il 20 ottobre 2026 e ottimizzate in WebP. Sono illustrazioni sintetiche, non fotografie del negozio o dei suoi prodotti; non incorporano fotografie di terzi scaricate da raccolte stock. Uso soggetto ai termini OpenAI applicabili alla generazione. Non viene rivendicata esclusività. I nomi commerciali restano dei rispettivi titolari.

## Verifiche

Controlli di riferimento: `npm run check`, `npm run build`, richieste HTTP sulla build, verifica browser desktop/mobile, navigazione e immagini. Il punteggio Lighthouse dipende dall’hosting e va misurato sulla preview pubblicata; nessun punteggio viene garantito. Nessun database, form, CMS, autenticazione, analytics o cookie di tracciamento.

La direzione “bottega di quartiere” usa testi e dettagli locali in `site.design`, illustrazione SVG originale `BreadSketch.astro`, composizioni asimmetriche e cartellini tipografici. Non aggiunge storia aziendale, certificazioni o affermazioni sui metodi di produzione.

Verifica eseguita nell’ambiente cloud: installazione ripetibile con `npm ci`, Astro check (0 errori/avvisi), build statica, richieste HTTP sviluppo/preview e browser Chromium a 320, 390 e 1440 px superati. Verificati menu mobile, ancore, assenza di overflow, caricamento immagini, link telefono/indicazioni e assenza di richieste esterne. Lighthouse locale mobile: prestazioni 99, accessibilità 100, buone pratiche 100, SEO 66 (indicizzazione intenzionalmente bloccata per la demo). I controlli automatici non sostituiscono una verifica assistiva manuale o una misurazione sulla destinazione pubblicata.
