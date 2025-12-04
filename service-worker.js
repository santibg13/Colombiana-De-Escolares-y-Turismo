self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("colestur-cache").then((cache) => {
      return cache.addAll([
        "/Colombiana-De-Escolares-y-Turismo/index.html",
        "/Colombiana-De-Escolares-y-Turismo/reservar.html",
        "/Colombiana-De-Escolares-y-Turismo/contacto.html",
        "/Colombiana-De-Escolares-y-Turismo/style.css"
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
