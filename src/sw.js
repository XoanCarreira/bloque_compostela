// Asignar nombre y version de la caché

const CACHE_NAME = 'v1_cache_bouldercompostela_pwa';

// Ficheros a cachear en la aplicación

var urlsToCache = [
    './',
    '%sveltekit.assets%/favicon_16.png',
    '%sveltekit.assets%/favicon_32.png',
    '%sveltekit.assets%/favicon_48.png',
    '%sveltekit.assets%/favicon_96.png',
    '%sveltekit.assets%/favicon_152.png',
    '%sveltekit.assets%/favicon_167.png',
    '%sveltekit.assets%/favicon_180.png',
    '%sveltekit.assets%/favicon_192.png',
    '%sveltekit.assets%/favicon_512.png',
    './static/',
    './src/'
];


var lampaiImages = [];
for (var i = 0; i < sectores.src.length; i++) {
  gamesImages.push("./static/lampai/" + sectores.src[i].slug + ".jpg");
}
var contentToCache = urlsToCache.concat(lampaiImages);

// Evento install
//Que la web funcione sin conexiÓN
//instalación del service worker y guardar en caché los recursosestáticos
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(async cache => {
                await cache.addAll(contentToCache);
                self.skipWaiting();

            })
            .catch(err => {
                console.log( 'No se ha registrado el caché', err)
            })
    )
})


// Evento activate

self.addEventListener('activate', e => {
    const cacheWhitelist = [CACHE_NAME];

    e.waitUntil(
        caches.keys()
        .then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if(cacheWhitelist.indexOf(cacheName) === 1){
                        // Borrar elementos que no necesita
                        return caches.delete(cacheName);
                    }
                })
            )
        })
        .then(
            ()=>{
                //Activar cache

        self.clientInformation.claim();
    }
        )
    )
});

// Evento fetch

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request)
        .then(res => {
            if(res){
                // devuelvo datos desde caché
                return res;
            }
            return fetch(e.request);
        })
    )
});