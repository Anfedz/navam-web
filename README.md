# NAVAM — sitio web

Sitio estático (HTML/CSS/JS puro, sin build) para la consultora NAVAM,
basado en el doc de requerimientos y con referencia de diseño en sgsst.com.co.

No es una página productiva/transaccional: es contenido informativo, así que
no necesita servidor con backend ni build step. Se sube tal cual a GitHub y
se hostea con GitHub Pages.

## Estructura

```
index.html                  Home: quiénes somos, servicios, contacto
brigadas-de-emergencia.html Página larga del servicio (7 bloques del doc)
noticias.html                Noticias Colombia / otros países
assets/css/style.css
assets/js/main.js
assets/img/                  Fotos del doc de requerimientos
```

## Ver en local

No requiere instalar nada. Basta abrir `index.html` en el navegador, o si
prefieres un servidor simple:

```bash
python3 -m http.server 8000
```

y entrar a http://localhost:8000

## Publicar en GitHub Pages

```bash
cd navam-web
git init
git add .
git commit -m "Sitio inicial NAVAM"
git branch -M main
git remote add origin <URL-del-repo-en-GitHub>
git push -u origin main
```

Luego en GitHub: **Settings → Pages → Source: Deploy from a branch → main /
(root)**. El sitio queda en `https://<usuario>.github.io/<repo>/`.

Si el repo va a usar un dominio propio, agrega un archivo `CNAME` en la raíz
con el dominio, y configura el DNS del dominio apuntando a GitHub Pages.

## Pendientes de contenido (marcados en el doc original)

- Logo definitivo de NAVAM en alta resolución (se usó una foto de referencia
  del equipo con el logo de fondo).
- Datos de contacto reales (teléfono, WhatsApp, dirección, redes).
- Video de la sección "Voces de la seguridad" (testimonios).
- Confirmar textos y aprobar fotografías finales de brigadas.
