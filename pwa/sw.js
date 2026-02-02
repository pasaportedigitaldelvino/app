const CACHE_NAME = 'mantenimiento-cache-v1';
const urlsToCache = [
  '/',
  'index.html',
  // Agrega aquí otros assets si los tienes, como CSS externo o íconos
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
