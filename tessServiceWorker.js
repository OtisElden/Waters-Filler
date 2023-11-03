//This pulls the actual files, however I cannot figure out how to get the files to be returned to tesseractWebWorker.js  
  
  try {
    importScripts('tesseractJS/scripts/tesseract.min.js',
    'tesseractJS/scripts/tesseract.js@v4.0.3_dist_worker.min.js',
    'tesseractJS/scripts/tesseract.js-core@4.0.3_tesseract-core-simd.wasm.js');
  } catch (e) {
    console.error(e);
  }

// self.addEventListener('install', (event) => {
//   const resourcesToCache = [
//     'tesseractJS/scripts/tesseract.min.js',
//     'tesseractJS/scripts/tesseract.js@v4.0.3_dist_worker.min.js',
//     'tesseractJS/scripts/tesseract.js-core@4.0.3_tesseract-core-simd.wasm.js',
//     // ... any other files you want to cache ...
//   ];

//   event.waitUntil(
//     caches.open('tesseract-cache').then((cache) => {
//       const fetchPromises = resourcesToCache.map((resource) => {
//         return fetch(resource).then((response) => {
//           if (!response.ok) {
//             throw new Error(`Failed to fetch ${resource}: ${response.statusText}`);
//           }
//           return cache.put(resource, response);
//         });
//       });
//       return Promise.all(fetchPromises);
//     })
//   );
// });

// self.addEventListener('fetch', (event) => {
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       return response || fetch(event.request);
//     })
//   );
// });













// //This self.addEventListener is an example for something that could be used to cache the tesseractJS scripts.
// //I need to update this exmaple with grabbing the files below. 
// //I then need to update a way to return those files when tesseractWebWorker.js calls for them.


// self.addEventListener('install', event => {
//     // Using importScripts() inside the install event handler
//     importScripts('my-fetch-logic.js');
  
//     // Perform other install tasks, such as caching assets
//     event.waitUntil(
//       caches.open('my-cache').then(cache => {
//         return cache.addAll([
//           '/index.html',
//           '/main.css',
//           '/app.js',
//           // other assets
//         ]);
//       })
//     );
//   });
  
//   self.addEventListener('fetch', event => {
//     event.respondWith(self.customFetchLogic(event));
//   });

// //Need to import the following for use later in tesseractWebWorker.js

//   // "tesseractJS/scripts/tesseract.js@v4.0.3_dist_worker.min.js",
//   // "tesseractJS/scripts/tesseract.js-core@4.0.3_tesseract-core-simd.wasm.js",
//   // "tesseractJS/scripts/languages/"
//   // "tesseractJS/scripts/tesseract.min.js""