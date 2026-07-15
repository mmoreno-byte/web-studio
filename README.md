# MM Web Studio

Sitio comercial minimalista para exhibir y vender servicios de desarrollo web.

## Stack

- React 19 + Vite 7
- CSS plano (sin frameworks)
- EmailJS (formulario de contacto)
- Deploy: Cloudflare Pages

## Desarrollo

```bash
npm install
npm run dev
```

## Variables de entorno

Copia `.env.example` a `.env` y rellena los valores de EmailJS (los mismos del portfolio principal).

## Deploy

```bash
npm run build
wrangler pages deploy dist --project-name=mm-web-studio
```
