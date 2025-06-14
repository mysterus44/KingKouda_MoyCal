const CACHE_NAME = "moycal-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/index1.html",
  "/index2.html",
  "/icon-192.png",
  "/icon-512.png",
  "/whats.png",
  "/manifest.json",
  "/logo.png",
  "/Kingkouda Cal,aab",
  // Ajoute ici tout autre fichier JS, CSS, image, etc.
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
