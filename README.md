# Invitación de boda · Sandra & Brando

Archivos:
- `index.html` — la invitación (link general o por familia: `index.html#enlace-corto`)
- `admin.html` — panel privado para los novios (confirmaciones, cupos, menú, enlaces por familia, CSV)
- `config.js` — **lo único que editas**: llaves de Firebase, WhatsApp, familias, platos
- `firestore.rules` — reglas de seguridad de la base de datos
- `assets/` — rosas, anillos y música

Sin Firebase la invitación sigue funcionando: la confirmación se envía por WhatsApp.
Para ver el panel con datos falsos: `admin.html#demo`.

## Activar Firebase (gratis, ~10 min)
1. https://console.firebase.google.com → **Agregar proyecto** (sin Analytics).
2. En el proyecto: **</> Web** → registra la app → copia `apiKey`, `authDomain`, `projectId`, `appId` a `config.js` (`FIREBASE`). *Estas llaves no son secretas; lo que protege los datos son las reglas.*
3. **Build → Firestore Database → Crear base de datos** (modo producción, región cercana).
4. **Build → Authentication → Comenzar → Email/Password → Habilitar**. En la pestaña *Users* crea un usuario para Sandra y otro para Brando (correo + contraseña).
5. **Firestore → Reglas**: pega `firestore.rules` cambiando `CORREO_DE_SANDRA@gmail.com` y `CORREO_DE_BRANDO@gmail.com` por los correos del paso 4 → **Publicar**.
6. Sube a GitHub y activa **Settings → Pages** (rama `main`, carpeta `/root`).
   - Invitación: `https://USUARIO.github.io/REPO/`
   - Panel: `https://USUARIO.github.io/REPO/admin.html`

## Familias y enlaces
Edita `FAMILIAS` en `config.js`: `["perez","Familia Pérez",4]`. En `admin.html → Enlaces` salen los links con botón de WhatsApp. Cada familia responde una sola vez; si se equivocan, bórrales la respuesta (×) en el panel y vuelven a confirmar.
