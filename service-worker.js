/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["E:/博客 - 副本/public/404.html","f9b06d2bc5e06166e520d63650ce80f1"],["E:/博客 - 副本/public/about/index.html","be5edb8f189f36ff7f350a122e7a1b70"],["E:/博客 - 副本/public/archives/2020/11/index.html","2f7cc1bc72fa686eda6428c2d0c3fa78"],["E:/博客 - 副本/public/archives/2020/index.html","f67d2981808e24d2484334c280f33f9e"],["E:/博客 - 副本/public/archives/2021/01/index.html","450d483334bd13f47898805d4a1987d2"],["E:/博客 - 副本/public/archives/2021/02/index.html","cf0c21ab1ad9ceea1547acd0569be617"],["E:/博客 - 副本/public/archives/2021/index.html","0639479595079efc7dcec5de175174a3"],["E:/博客 - 副本/public/archives/index.html","abb1e14034a817c6434b5ccd21b14747"],["E:/博客 - 副本/public/categories/index.html","99a7f00d4077a4b1c51423aaceba99e9"],["E:/博客 - 副本/public/categories/💻教程/index.html","8cd1721e57e00014248c8dbc4b173335"],["E:/博客 - 副本/public/categories/📕笔记/index.html","547a5ac4596313f18809a976a58b465a"],["E:/博客 - 副本/public/categories/🤔随想/index.html","3b59e3056f95293d47f07fb044af0f4a"],["E:/博客 - 副本/public/css/custom.css","f7b00700005f735bf5a02f0108dc3949"],["E:/博客 - 副本/public/css/index.css","09d49f8a82de26d51c89a728f1932c92"],["E:/博客 - 副本/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/博客 - 副本/public/friendcircle/index.html","c2440a79da942ca6a06f2da8f0f10bcd"],["E:/博客 - 副本/public/hassan/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["E:/博客 - 副本/public/hassan/favicon.png","e9ba32d6adfe3e9baeca3ec2a9c446e1"],["E:/博客 - 副本/public/hassan/hassan.css","76078e8b1240fda0c5e3c79420b41aee"],["E:/博客 - 副本/public/hassan/hassan.js","9b85e07e92398195d780f1ac5e6ff8ef"],["E:/博客 - 副本/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/博客 - 副本/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["E:/博客 - 副本/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["E:/博客 - 副本/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/博客 - 副本/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/博客 - 副本/public/index.html","b3d87687de10fa6f58544be659fe94ee"],["E:/博客 - 副本/public/js/fcircle.js","669b484b83f2a4757e64dc9921c45f4b"],["E:/博客 - 副本/public/js/hassan.js","c2fef07fd4a25839644a21e038936589"],["E:/博客 - 副本/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/博客 - 副本/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/博客 - 副本/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/博客 - 副本/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/博客 - 副本/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/博客 - 副本/public/link/index.html","907e08c0f8ad7a23763e7f507ae6130c"],["E:/博客 - 副本/public/log/index.html","fc4e37e300a6dc8c60cfddaa22646284"],["E:/博客 - 副本/public/music/index.html","108ce536b8b1aaf3d7ee9c51f1429c3a"],["E:/博客 - 副本/public/posts/3ce75aa2/index.html","98738a60b9a1187e52553c5bfe3b4ecf"],["E:/博客 - 副本/public/posts/61c6c2e8/index.html","8b7c2d4783d21f5d79aed5e8a5651ada"],["E:/博客 - 副本/public/posts/d5180487/index.html","8d7895543b9cb132b9eddd7678b475a0"],["E:/博客 - 副本/public/posts/d95d7e09/index.html","0f0a4afeb4f26eaf2492fde4c1ab9ca6"],["E:/博客 - 副本/public/tags/index.html","1148b1c5a9fcd48a08a1a2b6289050c2"],["E:/博客 - 副本/public/tags/🎯计划/index.html","38537b8a1c75ad0b47c5502ed9bbb15f"],["E:/博客 - 副本/public/tags/📝博客/index.html","9b483ebea2ed81f290b4b260eaae9935"],["E:/博客 - 副本/public/tags/🔠英语/index.html","4dee69bcc42f5be450ce3626cdbe5b88"],["E:/博客 - 副本/public/tags/🔹Hexo/index.html","fb7118f900f1cbc240f5d4156cbab770"],["E:/博客 - 副本/public/tags/🦆雅思/index.html","1c1a45f1c8045496bd05dff7c93ed362"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







