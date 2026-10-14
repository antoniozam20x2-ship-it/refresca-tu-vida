/* Refresca tu vida — capa de datos mock.
   Hoy usa localStorage. Para conectar tu backend después,
   cambia cada función por fetch('https://tu-api/...') sin tocar el resto. */
(function (w) {
  var K = { menu: "refresca-menu", orders: "refresca-orders", cart: "refresca-cart", cfg: "refresca-cfg", coupon: "refresca-coupon", auth: "refresca-auth" };
  function leer(k, fb) { try { var v = JSON.parse(localStorage.getItem(k)); return v == null ? fb : v; } catch (e) { return fb; } }
  function guardar(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  var SEED_MENU = [
    { id: "clasica", cat: "Clásicos", nombre: "Leche clásica perlas", desc: "Té negro, leche y tapioca.", precio: 55, img: "assets/boba-limon.jpg" },
    { id: "tiger", cat: "Clásicos", nombre: "Tiger brown sugar", desc: "Azúcar morena y leche fresca.", precio: 65, img: "assets/hero-clasico.jpg" },
    { id: "fresa", cat: "Frutales", nombre: "Fresa colada", desc: "Fresa, leche y perlas.", precio: 60, img: "assets/boba-mango.jpg" },
    { id: "cassis", cat: "Frutales", nombre: "Cassis frutos rojos", desc: "Té frutal con tapioca.", precio: 62, img: "assets/boba-fresa.jpg" },
    { id: "matcha", cat: "Especiales", nombre: "Matcha boba", desc: "Matcha con leche y perlas.", precio: 68, img: "assets/boba-matcha.jpg" }
  ];
  var TOPPINGS = [
    { id: "ninguno", nombre: "Sin extra", precio: 0 },
    { id: "tapioca", nombre: "Tapioca extra", precio: 10 },
    { id: "popping", nombre: "Popping de mango", precio: 12 },
    { id: "jelly", nombre: "Jelly de coco", precio: 10 },
    { id: "queso", nombre: "Espuma de queso", precio: 15 }
  ];
  // TODO backend: sustituir leer/guardar por fetch. Ej:
  // async function getMenu(){ const r = await fetch(API+'/bebidas'); return r.json(); }
  w.RefrescaApi = {
    keys: K,
    toppings: TOPPINGS,
    getMenu: function () { var v = leer(K.menu, null); if (!v) { guardar(K.menu, SEED_MENU); return SEED_MENU.slice(); } return v; },
    saveMenu: function (m) { guardar(K.menu, m); },
    getCoupon: function () { var v = leer(K.coupon, null); if (!v) { v = { code: "LUNES10", pct: 10, onlyMonday: true, activo: true }; guardar(K.coupon, v); } return v; },
    saveCoupon: function (c) { guardar(K.coupon, c); },
    esLunes: function () { return new Date().getDay() === 1; },
    getOrders: function () { return leer(K.orders, []); },
    saveOrders: function (o) { guardar(K.orders, o); },
    getCart: function () { return leer(K.cart, []); },
    saveCart: function (c) { guardar(K.cart, c); },
    getCfg: function () { var v = leer(K.cfg, null); if (!v) { v = { wa: "520000000000", clave: "refresca123" }; guardar(K.cfg, v); } return v; },
    saveCfg: function (c) { guardar(K.cfg, c); }
  };
})(window);
