self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('nikhilnayak').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/css/main.css',
	'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/css/materialize.min.css',
	'https://fonts.googleapis.com/icon?family=Material+Icons',
	'https://fonts.googleapis.com/css?family=Roboto:400,400italic,700|Roboto+Mono:400,500',
	'https://code.jquery.com/jquery-2.1.1.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/js/materialize.min.js',
        'https://nikhilnayak98.github.io/js/smoothscroll.js',
	'/blog/',
	'/MachineLearning/',
	'/academics/',
	'/about/',
	'/repos/'
      ])
      .then(() => self.skipWaiting());
    })
  )
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
