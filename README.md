# Novus Core — sitio institucional

Repositorio independiente del sitio público de Novus Core. Esta carpeta es la raíz que debe conectarse a GitHub y Vercel.

Sitio estático preparado a partir del concepto visual `stitch_novus_core_company_website.zip`.

## Alcance

- Inicio, soluciones, metodología y auditoría mediante rutas `/`, `/soluciones`, `/metodologia` y `/agendar-auditoria`.
- Visual Liquid Crystal: superficies cristalinas, obsidiana, plata, acento cian, Space Grotesk y Hanken Grotesk.
- Showcase 3D inspirado en el video de referencia: escenas propias de warehouse, trazabilidad y flujo modular con navegación lateral y miniaturas.
- Copy alineado con el modelo actual de Novus Core: diagnóstico primero, distribución/logística, módulo acotado, evidencia y filtro A/B/C/D.
- Contacto actual exclusivamente por WhatsApp; el sitio no captura ni almacena datos de prospectos.

## Vercel

Es un sitio estático sin build. El proyecto se publica desde esta carpeta y `vercel.json` redirige las rutas al núcleo `index.html` para que la navegación del cliente funcione.

Configuración recomendada en Vercel:

- Framework preset: `Other`
- Build command: vacío
- Output directory: `.`
- Install command: vacío

## GitHub

Desde esta carpeta:

```powershell
git init
git add .
git commit -m "Preparar sitio institucional Novus Core"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
git push -u origin main
```

Después, en Vercel, importa ese repositorio y selecciona la raíz del proyecto. Cada cambio enviado a `main` podrá generar un nuevo despliegue.

## Pendientes antes de producción

- Si más adelante se requiere capturar solicitudes, definir primero el canal, consentimiento, responsable y almacenamiento aprobado.
- Sustituir fuentes remotas si se requiere operación sin dependencias externas.
- Validar los textos comerciales finales y aprobar publicación.
