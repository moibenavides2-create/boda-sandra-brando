/* ============================================================
   CONFIGURACIÓN DE LA INVITACIÓN  ·  Sandra & Brando
   Este archivo lo usan index.html (invitación) y admin.html (panel).
   ============================================================ */
window.BODA = {

  /* Firebase (ver README.md, paso a paso). Mientras apiKey esté vacío,
     la invitación manda la confirmación por WhatsApp. */
  FIREBASE: {
    apiKey: "AIzaSyCHgei7I4WMFlCP7mJjAAP1E_Pg1S5ZCH4",
    authDomain: "boda-sandra-y-brando.firebaseapp.com",
    projectId: "boda-sandra-y-brando",
    appId: "1:369085766613:web:f4998448be060a89b17b5c"
  },

  /* Número de WhatsApp de Sandra con indicativo, sin + ni espacios. Ej: 573001234567 */
  WHATSAPP: "",

  /* Máximo de personas cuando el invitado entra por el link general (sin familia) */
  MAX: 1,

  FECHA_LIMITE: "2026-12-06T23:59:59-05:00",

  /* Platos del menú, en orden (1, 2, 3) */
  DISHES: [
    "Pollo grillado en salsa bechamel",
    "Arroz salteado al wok con pollo",
    "Pastas Alfredo con pan al ajo"
  ],

  /* Familias invitadas: [ "enlace-corto", "Nombre que verá el invitado", cupos ]
     El link de cada una es:  index.html#enlace-corto
     (el panel admin.html te los genera con botón de WhatsApp) */
  FAMILIAS: [
    ["montes-benavides", "Familia Montes Benavides", 5],
      ["nancy-barrios", "Nancy Barrios", 1],
      ["mirian-romero", "Mirian Romero Pérez", 1],
      ["castro-ochoa", "Familia Castro Ochoa", 2],
      ["castro-ruiz", "Familia Castro Ruiz", 2],
      ["durlen-benavides", "Durlen Benavides", 1],
      ["henry-benavides", "Henry Benavides", 2],
      ["benavides-gamero", "Familia Benavides Gamero", 2],
      ["benavides-prada", "Familia Benavides Prada", 2],
      ["osvaldo-montes", "Osvaldo Montes", 2],
      ["castro-benavides", "Familia Castro Benavides", 2],
      ["guzman-montes", "Familia Guzman Montes", 2],
      ["de-la-hoz-montes", "Familia De la Hoz Montes", 2],
      ["fontalvo-jaraba", "Familia Fontalvo Jaraba", 3],
      ["jaraba-cruz", "Familia Jaraba Cruz", 3],
      ["eliana-rosillo", "Eliana Rosillo", 1],
      ["sheilis-carmona", "Sheilis Carmona", 1],
      ["dionner-yudex", "Dionner Yudex", 2],
      ["blanco-jeronimo", "Familia Blanco Jerónimo", 2],
      ["isabel-brayan", "Isabel Rodriguez y Brayan Martinez", 2],
      ["mercedes-luis", "Mercedes Villalba y Luis Carlos Duque", 2],
      ["carlos-ana", "Carlos Villalba y Ana Morales", 2],
      ["mirna-eliecer", "Mirna Villalba y Eliécer Valiente", 2],
      ["carlos-imara", "Carlos Villalba y Imara Fabregas ", 2],
      ["braulio", "Braulio Navarro", 1],
      ["deivis", "Deivis Valencia", 1],
      ["jose-villalba", "José Villalba", 1],
      ["jesus-maryuri", "Jesús Villalba y Maryuri Nieto", 2],
      ["jeiner-dina", "Jeiner Tapia y Dina Lozano", 2],
      ["agustin-hernandez", "Agustin Hernandez", 1],
      ["luz-estela", "Luz Stella Olivera", 1],
      ["dayana-jorge", "Dayana Charris y Jorge Valdez", 2],
      ["ruth-oscar", "Ruth Morales y Oscar Vengoechea", 2],
      ["alix-cristian", "Alix Morales y Cristian Grau", 2],
      ["maritza-jose", "Maritza Dávila y José L. Fonseca", 2],
      ["alvaro-oneida", "Alvaro Morales y Oneida Mejía", 2],
      ["genesis-guzman", "Génesis Guzman", 1],
  ], 

  /* Lugar */
  LUGAR: "Restaurante Itamar",
  MAPS: "https://maps.app.goo.gl/91wsb37i2hopT8Fm6",
  MAPS_EMBED: "https://maps.google.com/maps?q=11.0021404,-74.8063042&z=17&output=embed"
};
