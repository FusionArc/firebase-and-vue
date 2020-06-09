import { registerRoute } from 'workbox-routing';
import { cacheNames } from 'workbox-core';
import { setCacheNameDetails } from 'workbox-core'
import { CacheFirst } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';

const precacheCacheName = cacheNames.precache;
const runtimeCacheName = cacheNames.runtime;
const googleAnalyticsCacheName = cacheNames.googleAnalytics;

setCacheNameDetails({
    prefix: 'cashscrapper',
    suffix: 'v1',
});

registerRoute(
    new RegExp('\\.js$'),
    jsHandler
);

registerRoute(
    new RegExp('\\.css$'),
    cssHandler
);
// Other webpack config...
registerRoute(
    ({ request }) => request.destination === 'image',
    new CacheFirst({
        cacheName: 'images',
        plugins: [
            // Other plugins...
            new ExpirationPlugin({
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
            }),
            new WorkboxPlugin.InjectManifest({
                swSrc: './src/sw.js',
            })
        ]
    })
)