// Dati forniti per la demo: verificarli tutti con il titolare prima della pubblicazione ufficiale.
export const site = {
  name: 'Forno Fossati', locality: 'Sovico, Brianza', category: 'Panificio artigianale',
  address: 'Via Giovanni da Sovico 16', postalAddress: '20845 Sovico (MB), Italia',
  phone: '+39 039 201 1007', telephone: '+390392011007', requiresVerification: true,
  directions: 'https://www.google.com/maps/dir/?api=1&destination=Via+Giovanni+da+Sovico+16%2C+20845+Sovico+MB%2C+Italia',
  seo: { title: 'Forno Fossati — Il piacere delle cose semplici | Demo non ufficiale', description: 'Una proposta visiva per Forno Fossati a Sovico: pane, focaccia e dolci. Demo commerciale non ufficiale; informazioni e immagini da verificare.' },
  notice: 'Demo commerciale non ufficiale · Informazioni da verificare',
  nav: [{ label: 'Il forno', href: '#il-forno' }, { label: 'Le nostre proposte', href: '#proposte' }, { label: 'Dove siamo', href: '#contatti' }],
  hero: { eyebrow: 'IL PANE. IL QUARTIERE. LE PICCOLE COSE.', title: 'Ci vediamo', emphasis: 'al forno.', description: 'Per il pane da portare a casa. Per una fetta di focaccia. O per quel dolce che non era in programma. Un piccolo appuntamento, a Sovico.', primary: 'Dai un’occhiata al banco', secondary: 'Vieni a trovarci' },
  design: { shopLabel: 'PANE, FOCACCIA E COSE BUONE', photoNote: 'Un’idea di forno, in attesa delle foto vere.', marginNote: 'Si passa per il pane.\nSi torna per il piacere.', productLabel: 'APPUNTI DAL BANCO', productTitle: 'Tu da cosa cominci?', productNote: 'C’è chi sceglie il pane.\nE chi parte dal dolce.', storyAside: 'Le piccole abitudini\nche ci piacciono.', addressNote: 'Segnati l’indirizzo.', galleryCaptions: ['Una pausa dolce.', 'Il pane, prima di tutto.', 'Da dividere. Oppure no.'] },
  intro: { eyebrow: 'UN FORNO, TANTI PICCOLI MOMENTI', title: 'Il bello di avere\nun forno vicino.', text: 'Il pane da portare a tavola, una focaccia per la pausa, un dolce da condividere. Il forno è quel posto che trova spazio nelle abitudini di ogni giorno.', detail: 'Questa è la nostra proposta per raccontare Forno Fossati: un panificio artigianale nel cuore di Sovico, vicino ai piccoli piaceri quotidiani.' },
  products: [
    { number: '01', name: 'Il pane', subtitle: 'IL COMPAGNO DI OGNI TAVOLA', description: 'Per accompagnare un pranzo, raccogliere un sugo, preparare una merenda. Semplicemente, pane.', image: '/images/bread.webp', alt: 'Composizione illustrativa di pani dalla crosta dorata', position: '30% 55%' },
    { number: '02', name: 'Focaccia & pizza', subtitle: 'UNA PAUSA CHE SA DI BUONO', description: 'Una fetta da gustare al volo o da condividere. Il lato più sfizioso della giornata.', image: '/images/focaccia.webp', alt: 'Immagine illustrativa di focaccia e pizza', position: 'center' },
    { number: '03', name: 'Il lato dolce', subtitle: 'PICCOLE FELICITÀ DA SCEGLIERE', description: 'Biscotti e dolci per la colazione, la pausa del pomeriggio o un pensiero da portare a casa.', image: '/images/pastries.webp', alt: 'Immagine illustrativa di croissant e biscotti', position: 'center' }
  ],
  story: { eyebrow: 'IL GUSTO DELLA QUOTIDIANITÀ', title: 'A tavola,\nuna cosa semplice.', text: 'Una tavola apparecchiata, il pane da spezzare, il tempo di stare insieme. Non servono grandi occasioni per dare valore a un gesto semplice.', detail: 'Pane, focaccia, pizza, grissini, biscotti e dolci: una proposta da scoprire direttamente in negozio. Disponibilità e assortimento sono da confermare.' },
  gallery: { eyebrow: 'ISPIRAZIONI DAL FORNO', title: 'Prima si guarda. Poi si assaggia.', disclaimer: 'Immagini illustrative generate con IA: non raffigurano il negozio né i prodotti reali di Forno Fossati.' },
  hours: [{ day: 'Lunedì', morning: '07:00 – 13:00', afternoon: 'Chiuso' }, { day: 'Martedì – Sabato', morning: '07:00 – 13:00', afternoon: '16:00 – 19:30' }, { day: 'Domenica', morning: 'Chiuso', afternoon: 'Chiuso' }],
  contact: { eyebrow: 'CI VEDIAMO A SOVICO', title: 'Il prossimo buon momento\ninizia da qui.', description: 'Passa in forno o chiamaci per informazioni sui prodotti e sulla disponibilità.', verification: 'Indirizzo, numero di telefono, orari e assortimento sono dati forniti per questa demo e richiedono conferma prima di una pubblicazione ufficiale.' },
  footer: 'Progetto dimostrativo indipendente. Non affiliato né autorizzato da Forno Fossati. Nessun cookie di tracciamento o servizio di analisi.'
};
