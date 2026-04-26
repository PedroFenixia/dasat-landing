# DASAT Landing — código fuente

## Stack actual (sin build)
- HTML + CSS plano + JSX transpilado en el navegador con Babel Standalone
- React 18 + ReactDOM 18 vía UMD (unpkg)
- Sin dependencias de Node, sin build

## Archivos

| Archivo | Qué es |
|---|---|
| `DASAT Landing.html` | Entry point. Carga react, babel, y los `.jsx` |
| `app.jsx` | Toda la app: componentes, secciones, formulario |
| `styles.css` | Hoja de estilos completa |
| `tweaks-panel.jsx` | Panel de tweaks (modo edición) |
| `aviso-legal.html` / `privacidad.html` / `cookies.html` | Páginas legales |
| `legal-style.css` | Estilos de las páginas legales |

## Cómo correrlo localmente

Cualquier servidor estático sirve:

```bash
# python
python -m http.server 8000

# node
npx serve .
```

Luego abre `http://localhost:8000/DASAT Landing.html`.

## Cómo desplegarlo

### Opción 1 — GitHub Pages directo
1. Renombra `DASAT Landing.html` → `index.html`
2. Push a `main` (o `gh-pages`)
3. Settings → Pages → branch main → `/` (root)

### Opción 2 — Bundle de un solo archivo
Usa `DASAT Landing.bundle.html` (versión compilada con todos los recursos inlineados). Renombra a `index.html` y subes ese único archivo.

## Migrar a Vite + React (opcional)

Si quieres iterar con HMR y build "de verdad":

```bash
npm create vite@latest dasat-landing -- --template react
cd dasat-landing
```

Luego:
1. Mueve `app.jsx` a `src/App.jsx` y conviértelo a export default
2. Convierte cada función en componente exportado
3. Mueve `styles.css` a `src/styles.css` e impórtalo en `main.jsx`
4. Quita los `<script src="...react...">` del HTML (Vite lo gestiona)

Te puedo hacer la conversión si me lo pides.

## Form (Formspree)

El formulario apunta a `https://formspree.io/f/TU_ID_AQUI` — cambia el ID en `app.jsx` (busca `formspree.io/f/`).
