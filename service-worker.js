const cacheName = 'site-static-v26';
const assets = [
    '/',
    '/pesquisav26/index.html',
    '/pesquisav26/styles.css',
    '/pesquisav26/script.js',
    '/pesquisav26/manifest.json',
    '/pesquisav26/images/icon-192x192.png',
    '/pesquisav26/images/icon-512x512.png',
    // Adicione outros recursos necessários
];

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Retorna o recurso do cache se disponível
        return response || fetch(event.request).then(async fetchResponse => {
          // Se o recurso for buscado com sucesso na rede, adicione-o ao cache
          const cache = await caches.open(cacheName);
          cache.put(event.request, fetchResponse.clone());
          return fetchResponse;
        });
      })
  );
});