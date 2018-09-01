let staticCacheName = 'PWA-demo-v2';

// Default files to always cache
let cacheFiles = [
  './',
  './index.html',
  './accounts/home.html',
  './accounts/profile.html',
  './assets/js/bootstrap.min.js',
  './assets/js/jquery-3.3.1.slim.min.js',
  './assets/js/popper.min.js',
  './assets/css/bootstrap.min.css',
  './assets/css/fontawesome-free-5.1.0-web/css/all.css',
  './assets/css/fontawesome-free-5.1.0-web/webfonts/fa-solid-900.ttf',
  './assets/css/fontawesome-free-5.1.0-web/webfonts/fa-solid-900.woff'
]

self.addEventListener('install', (event) => {
    console.log('[ServiceWorker] Installed');
    // event.waitUntil Delays the event until the Promise is resolved
    event.waitUntil(
    	// Open the cache
	    caches.open(cacheName).then((cache) => {
	    // Add all the default files to the cache
			console.log('[ServiceWorker] Caching cacheFiles');
			return cache.addAll(cacheFiles);
	    })
	); // end event.waitUntil
});


self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activated');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((cacheName) => {
          return cacheName.startsWith('PWA-demo-') &&
                 !cacheFiles.includes(cacheName);
        }).map((cacheName) => {
          // Delete that cached file
					console.log('[ServiceWorker] Removing Cached Files from Cache - ', cacheName);
          return caches.delete(cacheName); //uncomment this
        })
      );
    })
  );
  return self.clients.claim();
});

//fetch data
self.addEventListener('fetch', (event) => {
	console.log('[ServiceWorker] Fetch', event.request.url);
	// e.respondWidth Responds to the fetch event
	event.respondWith(
		// Check in cache for the request being made
		caches.match(event.request).then((response) => {
				// If the request is in the cache
				if ( response ) {
					console.log("[ServiceWorker] Found in Cache", event.request.url, response);
					// Return the cached version
					return response;
				}
        // If the request is NOT in the cache, fetch and cache
  				let requestClone = event.request.clone();
  				return fetch(requestClone).then((response) => {
  						if ( !response ) {
  							console.log("[ServiceWorker] No response from fetch ")
  							return response;
  						}
  						let responseClone = response.clone();
  						//  Open the cache
  						caches.open(cacheName).then((cache) => {
  							// Put the fetched response in the cache
  							cache.put(event.request, responseClone);
  							console.log('[ServiceWorker] New Data Cached', event.request.url);
  							// Return the response
  							return response;
  				    }); // end caches.open

  					}).catch((err) => {
  						console.log('[ServiceWorker] Error Fetching & Caching New Data', err);
              return err;
  					});

			}) // end caches.match(event.request)
	); // end event.respondWith
});
