//This line ensures that serviceWorker is registered:
console.log('Hey buddy your service worker is registered. High five!');

//All the files I need to service worker to access:
const fileCache = [
  '/',
  'index.html',
  '/restaurant.html',
  '/css/styles.css',
  '/js/main.js',
  '/js/restaurant_info.js',
  '/data/restaurants.json',
  'img/1.jpg',
  'img/2.jpg',
  'img/3.jpg',
  'img/4.jpg',
  'img/5.jpg',
  'img/6.jpg',
  'img/7.jpg',
  'img/8.jpg',
  'img/9.jpg',
  'img/10.jpg',
]

//Listen for installation event:
self.addEventListener('install', function(event) {
  event.waitUntil( //This waitUntil method waits for installation to complete
    caches.open('v1').then(function(cache) {
      return cache.addAll(fileCache);
    })
  );
})

//Listen for fetch events (credit to Matthew Crawford blog and Doug Brown webinar for guidance on this section!):
self.addEventListener('fetch', function(event) {
  event.respondWith( //This respondWith method is meant to prevent the default fetch event & supply this promise:
    caches.match(event.request).then(function(response) {
      if (response) {
        console.log('Found ', event.request, ' in cache.');
        return response;
      } else {
        console.log('Could not find ', event.request, ' in cache. Must fetch from the internet.')
        return fetch(event.request)
        //Get ready this is chaining below!
        .then(function(response) {
          const cloneResponse = response.clone(); //Only can use returned event once, so must clone it
          caches.open('v1').then(function(cache) {
            cache.put(event.request, cloneResponse); //if requested event is found online then put it in the cache
          })
          return response;
        })
        .catch(function(err) {
          console.error(err);
        });
      }
    })
  );
})
