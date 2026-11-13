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
    ["montes-benavides", "Familia Montes Benavides", 4],
  ], 

  /* Lugar */
  LUGAR: "Restaurante Itamar",
  MAPS: "https://maps.app.goo.gl/91wsb37i2hopT8Fm6",
  MAPS_EMBED: "https://maps.google.com/maps?q=11.0021404,-74.8063042&z=17&output=embed"
};
