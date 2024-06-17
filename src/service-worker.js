// Asignar nombre y version de la caché

// let version = 1.0;

// const CACHE_NAME = `v${version}_cache_bouldercompostela_pwa`;

// // Ficheros a cachear en la aplicación

// var urlsToCache = [
//     './',
//     '%sveltekit.assets%/favicon_16.png',
//     '%sveltekit.assets%/favicon_32.png',
//     '%sveltekit.assets%/favicon_48.png',
//     '%sveltekit.assets%/favicon_96.png',
//     '%sveltekit.assets%/favicon_152.png',
//     '%sveltekit.assets%/favicon_167.png',
//     '%sveltekit.assets%/favicon_180.png',
//     '%sveltekit.assets%/favicon_192.png',
//     '%sveltekit.assets%/favicon_512.png',
//     '%sveltekit.assets%/',
//     '/src/'
// ];

// // Evento install
// //Que la web funcione sin conexiÓN
// //instalación del service worker y guardar en caché los recursosestáticos
// self.addEventListener('install', e => {
//     e.waitUntil(
//         caches.open(CACHE_NAME)
//             .then(cache => {
//                 return cache.addAll(urlsToCache)
//                         .then(() => {
//                             self.skipWaiting();
//                         })

//             })
//             .catch(err => {
//                 console.log( 'No se ha registrado el caché', err)
//             })
//     )
// })


// // Evento activate

// self.addEventListener('activate', e => {
//     const cacheWhitelist = [CACHE_NAME];

//     e.waitUntil(
//         caches.keys()
//         .then(cacheNames => {
//             return Promise.all(
//                 cacheNames.map(cacheName => {
//                     if(cacheWhitelist.indexOf(cacheName) === 1){
//                         // Borrar elementos que no necesita
//                         return caches.delete(cacheName);
//                     }
//                 })
//             )
//         })
//         .then(
//             ()=>{
//                 //Activar cache

//         self.clientInformation.claim();
//     }
//         )
//     )
// });

// // Evento fetch

// self.addEventListener('fetch', e => {
//     e.respondWith(
//         caches.match(e.request)
//         .then(res => {
//             if(res){
//                 // devuelvo datos desde caché
//                 return res;
//             }
//             return fetch(e.request);
//         })
//     )
// });

/// <reference types="@sveltejs/kit" />
import { build, files, version } from '$service-worker';

// Create a unique cache name for this deployment
const CACHE = `cache-${version}`;

const ASSETS = [
	...build, // the app itself
	...files  // everything in `static`
];

self.addEventListener('install', (event) => {
	// Create a new cache and add all files to it
	async function addFilesToCache() {
		const cache = await caches.open(CACHE);
		await cache.addAll(ASSETS);
	}

	event.waitUntil(addFilesToCache());
});

self.addEventListener('activate', (event) => {
	// Remove previous cached data from disk
	async function deleteOldCaches() {
		for (const key of await caches.keys()) {
			if (key !== CACHE) await caches.delete(key);
		}
	}

	event.waitUntil(deleteOldCaches());
});

self.addEventListener('fetch', (event) => {
	// ignore POST requests etc
	if (event.request.method !== 'GET') return;

	async function respond() {
		const url = new URL(event.request.url);
		const cache = await caches.open(CACHE);

		// `build`/`files` can always be served from the cache
		if (ASSETS.includes(url.pathname)) {
			const response = await cache.match(url.pathname);

			if (response) {
				return response;
			}
		}

		// for everything else, try the network first, but
		// fall back to the cache if we're offline
		try {
			const response = await fetch(event.request);

			// if we're offline, fetch can return a value that is not a Response
			// instead of throwing - and we can't pass this non-Response to respondWith
			if (!(response instanceof Response)) {
				throw new Error('invalid response from fetch');
			}

			if (response.status === 200) {
				cache.put(event.request, response.clone());
			}

			return response;
		} catch (err) {
			const response = await cache.match(event.request);

			if (response) {
				return response;
			}

			// if there's no cache, then just error out
			// as there is nothing we can do to respond to this request
			throw err;
		}
	}

	event.respondWith(respond());
});