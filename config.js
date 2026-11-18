/* ============================================================
   CONFIGURACIÓN DE LA INVITACIÓN  ·  Sandra & Brando
   Este archivo lo usan index.html (invitación) y admin.html (panel).
   ============================================================ */
window.BODA = {

  /* Firebase (ver README.md, paso a paso). Mientras apiKey esté vacío,
     la invitación manda la confirmación por WhatsApp. */
  FIREBASE: {
    apiKey: "AIzaSyCHgei7I4WMFlCP7mJjAAP1E_Pg1S5ZCH4",
    authDomain: "boda-sandra-brando.firebaseapp.com",
    projectId: "boda-sandra-brando",
    appId: "1:1234567890:web:abc123"
  },

  /* Número de WhatsApp de Sandra con indicativo, sin + ni espacios. Ej: 573001234567 */
  WHATSAPP: "",

  /* Máximo de personas cuando el invitado entra por el link general (sin familia) */
  MAX: 1,

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
      ["sofia-rudas", "Sofía Rudas", 1],
      ["montes-benavides", "Familia Montes Benavides", 4],
      ["mercedes-luis", "Mercedes Villalba y Luis Carlos Duque", 2],
      ["carlos-ana", "Carlos Villalba y Ana Morales", 2],
      ["mirna-eliecer", "Mirna Villalba y Eliécer Valiente", 2],
      ["carlos-imara", "Carlos Villalba y Imara Fabregas ", 2],
      ["braulio", "Braulio Navarro", 2],
      ["andrea-laura-sheila", "Andrea, Laura y Sheila Duque Villalba", 3],
      ["jose-villalba", "José Villalba", 1],
      ["jesus-maryuri", "Jesús Villalba y Maryuri Nieto", 2],
      ["jeiner-dina", "Jeiner Tapia y Dina Lozano", 2],
  ], 

  /* Lugar */
  LUGAR: "Restaurante Itamar",
  MAPS: "https://maps.app.goo.gl/91wsb37i2hopT8Fm6",
  MAPS_EMBED: "https://maps.google.com/maps?q=11.0021404,-74.8063042&z=17&output=embed"
};
