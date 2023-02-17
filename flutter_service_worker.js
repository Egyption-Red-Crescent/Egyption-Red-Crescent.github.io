'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "6f11136d4cff726406346a5b140b8b01",
"assets/assets/icons/add.svg": "303bee7604dc30b605e4ab0f3e86864c",
"assets/assets/icons/address.svg": "0e99ee6819256e8672699d7e26f636e6",
"assets/assets/icons/call.svg": "37a607e25129a821b97d82ac96522117",
"assets/assets/icons/cam.svg": "449383647da712c8da48931a86dd4369",
"assets/assets/icons/camera.svg": "449383647da712c8da48931a86dd4369",
"assets/assets/icons/email.svg": "b12f8434effc5cf53881412d528cda1f",
"assets/assets/icons/Facebook_Logo.svg": "e2554114339b6757d4da7c7ef0ec1aff",
"assets/assets/icons/Google_Logo.svg": "b7727941c0e8a117b6cfd8f06a1cb7ed",
"assets/assets/icons/home.svg": "22ee7fa23b3a967191e12be269ad43ac",
"assets/assets/icons/home2.svg": "84523339e47de19c481b81b3e3e30d28",
"assets/assets/icons/location.svg": "692533e1c19a478b43706986bcbaf4a2",
"assets/assets/icons/lock.svg": "7b3117969c8b99eadc5e0ed0144b877e",
"assets/assets/icons/message.svg": "6b22d761185c45ede224f890fe8e6f2e",
"assets/assets/icons/mic.svg": "20842873c05e3c0110870316d44c4f4c",
"assets/assets/icons/microphone-search.svg": "d67667da0789487170e74f271bdc7dda",
"assets/assets/icons/microphone.svg": "20842873c05e3c0110870316d44c4f4c",
"assets/assets/icons/notification.svg": "665143e69d368cb7d6abb26528af5fef",
"assets/assets/icons/person.svg": "3f6bea4d73508243f3912c1d53e57576",
"assets/assets/icons/phone.svg": "b826c8983e45e62c173fb4a8169f1573",
"assets/assets/icons/phone_num.svg": "404a7a1439f04c66cbb606016c62c2c4",
"assets/assets/icons/post.svg": "22714317ca82f642b95a65c4e294eb2f",
"assets/assets/icons/profile.svg": "eab07fc95311214cc9386585d0d9dfdc",
"assets/assets/icons/search.svg": "f7acadc427b2c929344224d6bb7b926d",
"assets/assets/icons/work.svg": "b9fd91ab5928caf617a8b8111290f495",
"assets/assets/images/logo.png": "4f70eaff33cb6aee0f25ec587ce522b0",
"assets/assets/images/splash.png": "d5d3d5ed135a8efb5b2f11c2f0683f57",
"assets/assets/images/textLogo.png": "d8ee88e86721bd3498d2f858f0bec4bf",
"assets/FontManifest.json": "8d501ac574479214d315c2e820f73c5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "19c57b6a9950f0b559fae45208efc9a0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"assets/packages/flutter_sound_web/howler/howler.js": "2bba823e6b4d71ea019d81d384672823",
"assets/packages/flutter_sound_web/src/flutter_sound.js": "aecd83c80bf4faace0bcea4cd47ab307",
"assets/packages/flutter_sound_web/src/flutter_sound_player.js": "6bf84579813fd481ec5e24e73927500d",
"assets/packages/flutter_sound_web/src/flutter_sound_recorder.js": "f7ac74c4e0fd5cd472d86c3fe93883fc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/shaders/ink_sparkle.frag": "a04e492a05f9fd1a8cc6f12163b184dd",
"canvaskit/canvaskit.js": "687636ce014616f8b829c44074231939",
"canvaskit/canvaskit.wasm": "d4972dbefe733345d4eabb87d17fcb5f",
"canvaskit/profiling/canvaskit.js": "ba8aac0ba37d0bfa3c9a5f77c761b88b",
"canvaskit/profiling/canvaskit.wasm": "05ad694fda6cfca3f9bbac4b18358f93",
"favicon.ico": "0867dbedb102fa6a1a150cb78d0ff3f1",
"flutter.js": "195f32f4217e034162a6697208586f44",
"icons/apple-touch-icon.png": "c2b9bac68976920e8c396fb7e34411ce",
"icons/Icon-192.png": "dc6eef21c67d22bc2e8f283f150df05f",
"icons/icon-512.png": "c47ad2e3a707f849e6dc946eba37430a",
"icons/Icon-maskable-192.png": "63db5fbced0836bb0c0dd04b7ac01fdf",
"icons/Icon-maskable-512.png": "ed2fed66282abe0efd82b26ad858c56f",
"index.html": "af985a7a759c981a8ed112fe18be967c",
"/": "af985a7a759c981a8ed112fe18be967c",
"main.dart.js": "45b46d43c8573374302f773b340eb5c7",
"manifest.json": "3eb795a9e2b255cccde3caedbe767b53",
"splash/img/dark-1x.png": "b4ac5834bd931d0ab83152408be01bb1",
"splash/img/dark-2x.png": "bce088629a016698f6cfea57300dd8be",
"splash/img/dark-3x.png": "a75a58365a923858ca5fcae0c4e09157",
"splash/img/dark-4x.png": "fbd12d60feee9460113197fcf45bd7ca",
"splash/img/light-1x.png": "b4ac5834bd931d0ab83152408be01bb1",
"splash/img/light-2x.png": "bce088629a016698f6cfea57300dd8be",
"splash/img/light-3x.png": "a75a58365a923858ca5fcae0c4e09157",
"splash/img/light-4x.png": "fbd12d60feee9460113197fcf45bd7ca",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "8632f66b778ab6afb1cdff5a5d50857a",
"version.json": "fd5c63045985d098764f94a2b1e0b96b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
