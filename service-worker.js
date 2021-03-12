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

var precacheConfig = [["E:/博客/public/404.html","99c4ee8e080f8f5b919dafb7de2d483d"],["E:/博客/public/about/index.html","77d32b4013f64ae2803762ad8d9ca23e"],["E:/博客/public/archives/2020/11/index.html","86f0e0fb2eb78285b972d07d130c3296"],["E:/博客/public/archives/2020/index.html","98cf989ce7d4fde53912b70e443b74e9"],["E:/博客/public/archives/2021/01/index.html","32a7b4a951e65ba46bfa61dba76c2d60"],["E:/博客/public/archives/2021/02/index.html","3d87cce36e6427f4d7b61360939465af"],["E:/博客/public/archives/2021/03/index.html","c46452fcec63439cd36eb41684e821cd"],["E:/博客/public/archives/2021/index.html","87dff02e654782b5a647924cc6ae5634"],["E:/博客/public/archives/index.html","9bc9e87d4dea97a1f41a29c25a0d33bd"],["E:/博客/public/categories/index.html","511d9b90a8099c5c072b083ae9d02ee6"],["E:/博客/public/categories/💻教程/index.html","4ce4e0bbb24cc5e67722ee3a0a125d19"],["E:/博客/public/categories/📕笔记/index.html","8366e4119d2451dab1a5dcc3e516d47b"],["E:/博客/public/categories/🤔随想/index.html","209a369545b055e213dda204861814d8"],["E:/博客/public/css/custom.css","7fe09cb022882dd3ba76e53a9e2a61e7"],["E:/博客/public/css/index.css","0a736bcb6c4fa68ad687cd17451c9504"],["E:/博客/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/博客/public/friendcircle/index.html","1f3ce8d8a1f329af5b4df1e2bf0acb05"],["E:/博客/public/hassan/favicon.png","e9ba32d6adfe3e9baeca3ec2a9c446e1"],["E:/博客/public/hassan/hassan.css","ebdce046430efc7909951356d3207c8a"],["E:/博客/public/hassan/hassan.js","bac1efe427c3639f1c5871f2c8b97749"],["E:/博客/public/hassan/loading.gif","ae125c4fad86d08bbac8ac0a78d19070"],["E:/博客/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/博客/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["E:/博客/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["E:/博客/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/博客/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/博客/public/index.html","5a3ac5cc15e817615b989da85bd6c798"],["E:/博客/public/js/fcircle.js","846e6af488fde7da76d8de7c7f7791a5"],["E:/博客/public/js/main.js","cb9e7b9cc8b0472444c4ce33a645ec6d"],["E:/博客/public/js/search/algolia.js","9f72ef8b8fdda25a767a787cd4bf9121"],["E:/博客/public/js/search/local-search.js","4fe3b4412d9bbe13578a9f5fe0b14047"],["E:/博客/public/js/tw_cn.js","0310e94ad716c794eadcb0fddfab0a2a"],["E:/博客/public/js/utils.js","6d3de46acc4245ac3d9d9de90bf37a9f"],["E:/博客/public/js/wow.js","622fcad702a078ed756f9c7fe16fd0f5"],["E:/博客/public/link/index.html","6b7a01b365836fbab8201aea562f9d35"],["E:/博客/public/log/index.html","4d913f89f2afe566113e525c3a083989"],["E:/博客/public/music/index.html","1f703a5e7ccf779250874d99a6e46917"],["E:/博客/public/posts/3bc57976/index.html","8d39161d520607c418a642e5624308d0"],["E:/博客/public/posts/3ce75aa2/index.html","9bc969a6b866482ee03c7f58040d89f8"],["E:/博客/public/posts/61c6c2e8/index.html","7c2786f0c4d496052351ad6d1836addb"],["E:/博客/public/posts/d5180487/index.html","10530fd2b71db7370576de8cd85417a7"],["E:/博客/public/posts/d95d7e09/index.html","fcdb503eecc9ddd9507bf0e52c270028"],["E:/博客/public/tags/index.html","9485a026c5b943f189afcdeecd2c4d16"],["E:/博客/public/tags/🌌蓝桥杯/index.html","c3ac6f1a90ce865e2a303b6d52c8eacb"],["E:/博客/public/tags/🎯计划/index.html","51573072ea4ea2e223761bfd2f072022"],["E:/博客/public/tags/📃C/index.html","5882f7f1d2a4be50fcb4c3cfa08864cb"],["E:/博客/public/tags/📜C语言/index.html","17caaa91247fe7defce10cd36ffe256c"],["E:/博客/public/tags/📝博客/index.html","1d2be7ca705d7ccf89795baac4875679"],["E:/博客/public/tags/🔠英语/index.html","32601ebe661e9153d5abf3b4fe8e9993"],["E:/博客/public/tags/🔹Hexo/index.html","baf05a4bab86a6e88e1b930242576a0c"],["E:/博客/public/tags/🦆雅思/index.html","482cfb0950d624fb0b1bdbe88f82f6bd"]];
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







