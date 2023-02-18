'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c890fcb45c1857a825a8f5af830f562d",
".git/config": "d03e3a107d295db464d3be85ebeb59f0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "80de721cf9e45dcc6246fd12cf684b23",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2f3c0354838513a5ac438f7f4c74a891",
".git/logs/refs/heads/master": "2f3c0354838513a5ac438f7f4c74a891",
".git/logs/refs/remotes/origin/master": "2e07eec9f5b39851cb95ea7b00519408",
".git/objects/05/88688656c86b30a067945afa250b03baeb47f7": "a61fac8f2dd1e3483d91a80f170cad64",
".git/objects/06/2d4852fa157697402206c3e36e7018d07684a8": "f4347e8dd727c5009fcc894b12911145",
".git/objects/06/d6687004fa1dc74f3904ef08e0c5a4f7217a82": "d8929d57fceab55e6dc6aaa8460d8f87",
".git/objects/08/16e7b38d4f3b3bb0cd2e0fb4aa99a8f3e5335f": "1fc181ad142c64bc72d534e67675e780",
".git/objects/0b/91ae7927bb1cfe76756d9cb1d3f60290c808e9": "51b25c6880b5e423231bfe770de7cfdd",
".git/objects/0d/bd546e55d2dc985f7bdeadec0c47e1f562a17d": "3e98db3d03451263c83e3588ba98f695",
".git/objects/0e/220bd2d6ec71063654dc29be714aa8269094ba": "cad71e585aeee8dc21032dfe6abb315c",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/12/30df9d0bb265d1e7726c9d91cc4d225925dfbd": "0fe99acc3226ace1248926d26adf62ad",
".git/objects/15/0eb1cff6b228478e6d5448bae594c68be481cf": "83b25834aa835469098eb91490440345",
".git/objects/16/9e16e4cc4718149a929370e6909e155a44510f": "df236440f0e3becb206d0280d3037111",
".git/objects/1b/9cce723982eff2d57c63fc4af64d8b858fa004": "5163c31ea74547dde7a0f34abfffd56c",
".git/objects/1c/b5e38c3cffd1a41390bfda3fc79a365a28e669": "9ab8f785928d6294af6136935957cb06",
".git/objects/25/04883f985efee02e0ec6aff0a39266b0feb37d": "75e8324d068579b4fe7699c3eabb3468",
".git/objects/26/23761c16adf0006e8f373766bb6bcddcdb6a3a": "bc0e24b5ba1fd0fd9175056308e7744a",
".git/objects/27/3e678d1405d2774c4c1ffab1c0bcf328f1f781": "f40c5a9b015fdcb3ecfc18e225a97d53",
".git/objects/28/5d3b3a65eb455d410c3bf31fccc8dbbc8cbdbc": "8f13b3e9424f71d09fc00a1d9e39692c",
".git/objects/28/fcf828833255887056dd1060963a6419437710": "f4c6f4023f8a03a51e14490e6d8a54e8",
".git/objects/29/a05ad6d342377938cc9cadea8f31fa0d673af8": "11176ae5c31fa3b288753427f0741cf0",
".git/objects/2a/dff3499e183253ae9150d69633092fea5e1b76": "1fe4e51cebcf0d00d96de4cc07222e58",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/d7d8410a303b5a41b95d78a2c6c1c067d877d8": "1b09c4220f06257183a0e0145cc264d0",
".git/objects/38/eeca73f5f3afffc53940ab2cf2288ea9ab310f": "20b2f7fe0e79be51f1123d75c62593a6",
".git/objects/3a/49e6ab2aae40b0608325744b39343cd386ed26": "28bf2a19934de9dd7cbd5ce82997df45",
".git/objects/3a/56edb0b5a9dcef5dfd349352496b8ba426056f": "d4df32a1487c898e08c5c83232fcbb26",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/3c/9285f64aefad83ee125fd7474f24c05f6171f6": "4a02923b08dcb9c3e126e6c6cc5d15b3",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3d/3ee4a025d1a1fec87536562b0afd3dfab395d8": "218dfe4f265f5332ac4dc38e673346cc",
".git/objects/3e/1f4fe727522123c08d383c078f7012d1c6805b": "881d217de8194ffda39508c352bc074f",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/a01f8fcc7334f83c2af287336b5ef6b88a40c5": "7e7147e582feaf910750f30be6009bc0",
".git/objects/41/b4e50d1c1ff08533db469a249981252de1b895": "7652d329eefe2e49b525ab8df10d05a5",
".git/objects/43/b53a62f3fb705ec2caccac9cf2b4101ec6e843": "4c54c15fd20fc0eee0ff0dc62a4f0a5b",
".git/objects/47/3e1685130c335b1ec3042f21f9ab96a64c431e": "bbb8041da3575c1f240a71689db3d7c3",
".git/objects/4b/1a59fadde66566809ecf7ef9ff6aeb72ef9b82": "162eb5cee7cb46a93d9dc6f894ee83d1",
".git/objects/50/7305270833888c4d7b2aa7e3289770654a26ce": "78d84d4b9ca83bdac54aa0362b8b501d",
".git/objects/51/db7b06704b69c7579220024a9e4472b0efa4d4": "50dbff61cdd2418887daef62d5ba9580",
".git/objects/54/e333b2572999271915fe2a5c1d050e11cd1c2b": "9fd346f4750848ff2dff5c99c5ae65b8",
".git/objects/58/161c7266d1d5af18cc398e904d1f533e4a1911": "d2b599c7a610d9b515d54c4343fee234",
".git/objects/6a/de4ecc99c985ff2aff1f9aa8cfecd6ccfe75fe": "da8319fc0c84e5fad97f573cfd83b05e",
".git/objects/6f/bea0451b8740b708d2dd3cd5d93c99ea5f0426": "99c466932c052d4699015afdf42316b0",
".git/objects/73/c2977cb8ac2de23e50bd83814e2bdb26522add": "2c067ec534f4eeac2aaaea054341722f",
".git/objects/73/e2303982175839fc2d3fcefdc21ce4cbca57d0": "675998c2e5d58465c187575bf42b22f5",
".git/objects/75/dccf3156f77002f47e39d90de32d41645f7e32": "41c9684a59b97a88f8b4e45d6f24e6bf",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/c9c137172c48c0c2c053e65553541a179e7ae6": "7ad3de0465a98670ab4b1c3065c9aec1",
".git/objects/7a/a42a64b00c8d747629232c4943bbfebe8b32ad": "9d6e0082464079e72db445c170314afc",
".git/objects/7d/5727609701770fa948bbb883461c6189e32b0c": "0c399162b90fdce5ec72184da5ecfc7d",
".git/objects/7d/a455f24ccfb4fc17c72beb9027f32e4eb4c539": "497f4cf13cf5af3e7167211ce1077395",
".git/objects/81/f8da657f4d111d76b4d2cd5a7411b77310dc0d": "8b8ee3407d538b030f8eb735009c6074",
".git/objects/82/3ab2995557564ab86d8179b6c4646bb8c51119": "f420f2bc34bab23038601f08014189c4",
".git/objects/84/bf8c438b85f18d0bcb2fd29b34f55b03e8893f": "305be586574f6e1e9bd554293db2dd4f",
".git/objects/85/b0f324911b1632a84ce0950763aaea1545e322": "a1b0f326f1d4ac86897f3f156b15b605",
".git/objects/8c/0cb024c11b24f82ad1b99a4e5e641b195d5fda": "9ce4f4854ab94b5c0a73b248529a2dbf",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/92/5d441748da9a1fb8185d6b3e4cf0e201a53794": "e3e5871d089156e0282260c2d42fc51e",
".git/objects/96/2fc2f146982d7ed1d50a367f4c8e84ea572a3c": "cd028991272a388d7c32fdde8466e488",
".git/objects/99/bac33d30ae11046fdee38699419ccc566c1c3a": "5c9dbff7c445dbfd21fa73567fafac77",
".git/objects/a0/04240460502d110bb24082418d338c2b65c54a": "c1d452081a9ac9bdc1837d82ebd73a73",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/64e1f9f10621fd2c0061914427f796ce08577d": "27c9f132658cc6c85a6c89154f574355",
".git/objects/a5/47d7530b17547f40e077669375b1875461b335": "9e2b85de372e6f80ffa977145f86f3c4",
".git/objects/a7/264c06ada505f56295b1ac5d3411d7fc8c1d84": "f4ab7260275377dff029aa784b42460a",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ae/2136c8ef209b93a160a7591a23c76fab8920d1": "43861525760aad1cd7d7ff2b62e5fa48",
".git/objects/ae/b08c20aed9ebd9275c82aec7ac2c74f2a6d9f1": "db56842ce34edf9791e3d230787c6206",
".git/objects/b6/932652d18cf99d72a3a7d07714af910d8e5454": "6d2027890be16cf5ec22a35d7ee9d763",
".git/objects/be/a5d142d8a953e5d694602b3080e205cba46602": "be46907554ef166a5b1ad1b62c7df153",
".git/objects/bf/9934418c816717ea8285eef05962630c32fdc1": "94928ae743b2d456bfa46024fdd62d2f",
".git/objects/bf/b34b1d678c1de94ad5a4c659a165e3a8018c38": "1eff6aa3b513324b37786ae0a4a4accf",
".git/objects/bf/ca2cec1b2acae3dc1d721c7da807619882373d": "7f2b629d3dea0b8fba81477e435a813d",
".git/objects/c2/4bd631d97a559dc73e72430bcf0940bf6bd5a5": "2cba556fabc328c5bb2b967fa7553dba",
".git/objects/c4/71bfed328213637471fedcb950381d9c5fb343": "9eb230f26b3f332451e8bdafea277ee4",
".git/objects/c6/52a5a18a6de8ac6beb77d6ded965be0e01f918": "eeb2d2f0e533b806abc6e8d937e3e7d8",
".git/objects/ca/2944123cdee49df9c81f5ae8e093bd60552e15": "e63cf9b9ab6fc163d2cb922f88e4c584",
".git/objects/d1/d9ddd3a8ab9b4efd54acfd2ccca4c6ae5d18fa": "30e520cdb09dce980a8462d87c5f4bb8",
".git/objects/d2/8d10108e5152c6221687e443567225cfd057b3": "cd954062e2e1db63a10cc9cd5788dba4",
".git/objects/d3/f0121aed3c57abd5ae3d42bd734ebc58374987": "b82e6ae9a339f5caec4021f6d096273e",
".git/objects/d9/b306a561786c37dc1f5323cdaffb4ad7acdf2f": "9bf31c254a51edb07de76e7fe2ac6d2c",
".git/objects/dd/82cde2a3cf0782327b24f004baf61749f97df3": "081ae850e676e190f90d1884b2c7e7f9",
".git/objects/de/aa8f9c2a9abdfce79093bd4b935c0412c3169d": "d1c3e281f64b30ed91c44167bd624c45",
".git/objects/e1/976064296d628b81452f11d0ff24d5eaf386ab": "4926f67039f651fbcfa128399384e81b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/3502116e163fb4a24ca1c953467cbede25836e": "c99ceba220bd882edd4d556b8aa1526b",
".git/objects/f1/6b586918ae57b838e8c23711d7ff36727d69ca": "75d81a07f217b8831742764c638708b6",
".git/objects/f7/7160a9cd0cadab6dd4e1f66267fa4c4325170b": "93263219f7ddbc4965bd3e2e02eebb54",
".git/objects/fd/4cebce3372826315c2c3946ba679350a9d2095": "84bd5ac2c1c96c1793c596bc1a7535e3",
".git/objects/ff/9fc918b45e9641d6e070fb218ab1adab9fd5ea": "7f0680219e80d4513b58d4d062db9a39",
".git/objects/ff/cc5ef315ea97ad4b16acab03ba96aa5dbc465c": "823cabb855cd37b32a99ce2411ddb4cc",
".git/refs/heads/master": "a8956161d4d9bddbba3489901e2a908f",
".git/refs/remotes/origin/master": "a8956161d4d9bddbba3489901e2a908f",
"assets/AssetManifest.json": "6b96d3ca2bae10f2e7074cd19447218e",
"assets/assets/icons/add.svg": "303bee7604dc30b605e4ab0f3e86864c",
"assets/assets/icons/address.svg": "0e99ee6819256e8672699d7e26f636e6",
"assets/assets/icons/call.svg": "1acf5fbc65ee3cedc706305b7ba96c1d",
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
"assets/assets/map_icon/car_accident_final.png": "3951e4f92502ace50ff7b0afcf8d50c6",
"assets/assets/map_icon/collapse_icon_final.png": "db8db98e03081c9913063799d6841eca",
"assets/assets/map_icon/fire_icon_final.png": "eb98275ba82031877f3b1ebbd74ce2f4",
"assets/FontManifest.json": "8d501ac574479214d315c2e820f73c5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "cbd31220920c79599f0f968695c104d4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"assets/packages/flutter_sound_web/howler/howler.js": "2bba823e6b4d71ea019d81d384672823",
"assets/packages/flutter_sound_web/src/flutter_sound.js": "aecd83c80bf4faace0bcea4cd47ab307",
"assets/packages/flutter_sound_web/src/flutter_sound_player.js": "6bf84579813fd481ec5e24e73927500d",
"assets/packages/flutter_sound_web/src/flutter_sound_recorder.js": "f7ac74c4e0fd5cd472d86c3fe93883fc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
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
"index.html": "e9ec5d5a9bf70d68313f225866e270a5",
"/": "e9ec5d5a9bf70d68313f225866e270a5",
"main.dart.js": "06c08b2034c61c064f3a190d9ab04aba",
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
