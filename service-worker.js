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

var precacheConfig = [["E:/博客/public/404.html","7a7fe5b2defc4161b0cac4a1e1fdf7f3"],["E:/博客/public/about/index.html","e42e3e7902bbf1a2af3454d232211922"],["E:/博客/public/archives/2020/11/index.html","b389af75a27bc77cfe4c33a6002b702c"],["E:/博客/public/archives/2020/index.html","95711a2fd96bdf8719bb7721f689ad28"],["E:/博客/public/archives/2021/01/index.html","82c088515753f87784f62a2cead2f743"],["E:/博客/public/archives/2021/02/index.html","37b6cb88f329d32807ad757eed21ea6d"],["E:/博客/public/archives/2021/03/index.html","7a448e278cbe7d527a64dd36b7e36dbe"],["E:/博客/public/archives/2021/index.html","ac6eabf9a84a06af0bdb96c6119bc697"],["E:/博客/public/archives/index.html","e619dae314b485fb0f5986a6c1f76f0b"],["E:/博客/public/categories/index.html","8b8313126f93705a9e98e0a0718d653a"],["E:/博客/public/categories/💻教程/index.html","c5ffb05ab654a067cd27f0c932322194"],["E:/博客/public/categories/📕笔记/index.html","1e73b88a3d298042a89b37e5f22976cc"],["E:/博客/public/categories/🤔随想/index.html","178843c24af96de71a76bdd4b8057d20"],["E:/博客/public/comments/index.html","4c5449d7705878d7ec79470aaff37078"],["E:/博客/public/css/custom.css","21d87ac0d1af66b49676cff4cc938be2"],["E:/博客/public/css/index.css","709092d8507ce9fa057367233a21b224"],["E:/博客/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/博客/public/friendcircle/index.html","4b31a62cf5df14fae4c40889ae8e9f76"],["E:/博客/public/hassan/favicon.png","e9ba32d6adfe3e9baeca3ec2a9c446e1"],["E:/博客/public/hassan/hassan.css","ebdce046430efc7909951356d3207c8a"],["E:/博客/public/hassan/hassan.js","bac1efe427c3639f1c5871f2c8b97749"],["E:/博客/public/hassan/loading.gif","ae125c4fad86d08bbac8ac0a78d19070"],["E:/博客/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/博客/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["E:/博客/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["E:/博客/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/博客/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/博客/public/index.html","65f1ee83fce7148cfeffa13bf0d5e138"],["E:/博客/public/js/fcircle.js","e933e3bed99decc6937a0e920e144df2"],["E:/博客/public/js/main.js","cb9e7b9cc8b0472444c4ce33a645ec6d"],["E:/博客/public/js/search/algolia.js","9f72ef8b8fdda25a767a787cd4bf9121"],["E:/博客/public/js/search/local-search.js","4fe3b4412d9bbe13578a9f5fe0b14047"],["E:/博客/public/js/tw_cn.js","0310e94ad716c794eadcb0fddfab0a2a"],["E:/博客/public/js/utils.js","6d3de46acc4245ac3d9d9de90bf37a9f"],["E:/博客/public/js/wow.js","622fcad702a078ed756f9c7fe16fd0f5"],["E:/博客/public/link/index.html","696cd1f88e26246d8637c8a673e2f258"],["E:/博客/public/log/index.html","1e190bf25c2ea620bf2689394671e5da"],["E:/博客/public/music/index.html","1122934e4b4e8ec7e2eacc3e5789f546"],["E:/博客/public/posts/2b0afdc8/index.html","699d07e89d434be8566bc28493ffae21"],["E:/博客/public/posts/3bc57976/index.html","da203bea154b54d22fd66334b835dd5c"],["E:/博客/public/posts/3ce75aa2/index.html","e4e896b21bae94fd1ef5db96c0a5b19a"],["E:/博客/public/posts/61c6c2e8/index.html","ae320486e743c6ba95a464298b8740da"],["E:/博客/public/posts/d5180487/index.html","e7e5dc75810dbae999d02a3a6e3b1140"],["E:/博客/public/posts/d95d7e09/index.html","731f1db547fd3b9d0df433354646a58d"],["E:/博客/public/statistics/index.html","6b64d8960e8856fcf719d054a9a4964b"],["E:/博客/public/tags/index.html","dca73042ddbd34c8df156f25c87b105f"],["E:/博客/public/tags/🌌蓝桥杯/index.html","dde53b3157df5d17285d13ccdafe4ec2"],["E:/博客/public/tags/🎯计划/index.html","a891383e171be24240b3501c2b355d9b"],["E:/博客/public/tags/💻微型计算机/index.html","8de49262cb221b4747d278591256b75d"],["E:/博客/public/tags/📃C/index.html","9d783b739959dd9a080c0c561c52f1ef"],["E:/博客/public/tags/📜C语言/index.html","4106d999368607db1f02aa26c1ecaf14"],["E:/博客/public/tags/📝博客/index.html","5479a31c66d89c3d8ebe295b3e90f576"],["E:/博客/public/tags/🔠英语/index.html","754e4107a8ae10f50335efdc5544ee7c"],["E:/博客/public/tags/🔹Hexo/index.html","2fc4e220cb0a89ced542765235a0d779"],["E:/博客/public/tags/🦆雅思/index.html","612f96c1fa63c9bf46013af55253e4c6"]];
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







