self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('nikhilnayak').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/css/main.css',
	'/images/self_pic.jpg',
	'/images/icons/png/github17.png',
	'/images/icons/png/gmail3.png',
	'/images/icons/svgs/check.svg',
	'/images/icons/svgs/offline.svg',
	'/images/icons/svgs/lowbat.svg',
	'/images/icons/png/linkedin24.png',
	'/js/smoothscroll.js',
	'/js/util.js',
	'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/css/materialize.min.css',
	'https://fonts.googleapis.com/icon?family=Material+Icons',
	'https://fonts.googleapis.com/css?family=Roboto:400,400italic,700|Roboto+Mono:400,500',
	'https://code.jquery.com/jquery-2.1.1.min.js',
	'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/js/materialize.min.js',
        'https://nikhilnayak98.github.io/js/smoothscroll.js',
	'https://api.github.com/users/nikhilnayak98/repos',
	'https://api.github.com/users/nikhilnayak98',
	'/images/icons/png/icon-72x72.png',
	'/images/icons/png/icon-96x96.png',
	'/images/icons/png/icon-128x128.png',
	'/images/icons/png/icon-144x144.png',
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
