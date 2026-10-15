# Refresca tu vida 🧋 — Bubble tea (frontend demo, sin backend)

Demo fresca y juvenil. Todo ejemplo. Sin pago real.

## Ver local
- Sitio 100% estático. Prueba con `npx serve` o la extensión Live Server → abre `index.html`
- Tienda: `/index.html` · Admin: `/admin.html` (clave demo `refresca123`)

## Cupón de lunes
- Código de ejemplo: `LUNES10` = 10%, válido solo los lunes (se valida por fecha).
- Se edita en el admin: código, %, solo-lunes on/off, activo on/off.

## Conectar backend después
Toda la data pasa por `js/api.js` (localStorage hoy):
- `getMenu/saveMenu`, `getCoupon/saveCoupon`, `getOrders/saveOrders`, `getCart`, `getCfg`
- Cambia cada función por `fetch("https://tu-api/...")`. La tienda y el admin no cambian.
- Keys: `refresca-menu, refresca-coupon, refresca-orders, refresca-cart, refresca-cfg`

## Contenido ejemplo
Precios MXN, Calle Fresca 456, WA +52 000 000 0000, opiniones inventadas.
Fotos: Pixabay descargadas en `assets/` (sam651030, knd61, viarami), sin hotlinks.
