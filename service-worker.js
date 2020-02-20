/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2020/01/20/artipub/index.html",
    "revision": "2de6080f9c41d545d4de14b21dea0128"
  },
  {
    "url": "2020/02/20/vuepress-deploy/index.html",
    "revision": "36b9ffdda566bf6ad636aaa3bf23a5e0"
  },
  {
    "url": "404.html",
    "revision": "7f89e6b9924e6ca47d66c13d2e585917"
  },
  {
    "url": "assets/css/0.styles.65247156.css",
    "revision": "8b09aa74fec1f617faf133b008819da4"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFbzr-_dSb_nco.9738e026.woff2",
    "revision": "9738e026c7397b4e3b543ae7f1cf4b6c"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFWzr-_dSb_.b450bfca.woff2",
    "revision": "b450bfca16a8beb05580180de7b678f0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.613815e3.js",
    "revision": "6d8a9891106a4f2786d78fc9b3147f7b"
  },
  {
    "url": "assets/js/10.3d129a23.js",
    "revision": "71e62016deda3536b3266b5d7ef5d2b3"
  },
  {
    "url": "assets/js/11.bb70fa88.js",
    "revision": "a15edd11bfa0b97ca2311da89e2cb168"
  },
  {
    "url": "assets/js/12.2b7120bb.js",
    "revision": "a9f7d962761184c4148eead06d7bab53"
  },
  {
    "url": "assets/js/13.f4a14056.js",
    "revision": "522cf66b87d3e019ad0ff0ac3108a26d"
  },
  {
    "url": "assets/js/14.9ad1ce9b.js",
    "revision": "957f54e37a63be18f63834edd9ab27a7"
  },
  {
    "url": "assets/js/15.51f750a3.js",
    "revision": "d78a36a248bbd3e72782f193a48c9d0c"
  },
  {
    "url": "assets/js/16.95f44322.js",
    "revision": "31a08b50c8000d70bc86d5136cfa4c81"
  },
  {
    "url": "assets/js/17.6ead5700.js",
    "revision": "2d1edc60f046a8c9fdf82244274377f9"
  },
  {
    "url": "assets/js/18.52401301.js",
    "revision": "624c0dc000c15eb83487a50605c692bc"
  },
  {
    "url": "assets/js/19.b2192e3c.js",
    "revision": "703638a1b0ab980d74a5baa2f505ac6b"
  },
  {
    "url": "assets/js/20.0bd5fe59.js",
    "revision": "61b426a2d548583f6fc0488f6ffcd83d"
  },
  {
    "url": "assets/js/21.a768f187.js",
    "revision": "daf51edc8c39835a362cb761a43a62a2"
  },
  {
    "url": "assets/js/4.754501ec.js",
    "revision": "44a4f8efbdf580b9c57ecf41e420446a"
  },
  {
    "url": "assets/js/5.5dbe5595.js",
    "revision": "9f7f8a247b23f50a1c1e91b091ab2528"
  },
  {
    "url": "assets/js/6.cfdcc4b2.js",
    "revision": "0c7f5aeffa00f56a2be8946f830e05d1"
  },
  {
    "url": "assets/js/7.68cde662.js",
    "revision": "19820f5b5550064b4618ebb6bd371754"
  },
  {
    "url": "assets/js/8.60fe4a99.js",
    "revision": "c9120af374606aec317e4a5c03e49ef2"
  },
  {
    "url": "assets/js/9.f0f7ca0e.js",
    "revision": "56d4745c8edf5460b38e63e51138492e"
  },
  {
    "url": "assets/js/app.c20cf0f0.js",
    "revision": "70c71c06bc48573c774b1ecf98fa5bc9"
  },
  {
    "url": "assets/js/vuejs-paginate.57d24f85.js",
    "revision": "5f4c0cec438078984a27c6d051d3dc29"
  },
  {
    "url": "index.html",
    "revision": "a1b9e4cdc526e7dfbde351a17a5896dd"
  },
  {
    "url": "location/index.html",
    "revision": "ae1770b904cb4c53f9e031e7880a2404"
  },
  {
    "url": "location/北京/index.html",
    "revision": "f083c6ceebfe32bc6233bd16a19fa31d"
  },
  {
    "url": "tag/artipub/index.html",
    "revision": "162d837d70f6d7d6f082c4aa38d9491d"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "6a2e69744867afb945b833dc4daed98c"
  },
  {
    "url": "tag/index.html",
    "revision": "45bc6f6bff6e55bdb4aae76186451713"
  },
  {
    "url": "tag/vuepress-deploy/index.html",
    "revision": "6e091a3d9655e060d96562dc057cbe57"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "31d508ed4d8c546fcad870b256438fbf"
  },
  {
    "url": "tag/自动部署/index.html",
    "revision": "7343d8e776984da5c75f320a83b69c00"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
