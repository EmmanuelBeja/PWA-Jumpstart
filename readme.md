# Project Title

PWA-Jumpstart


users spend 87% of their time on native apps and 13% to the mobile web

78% of time spent is in users top 3 apps

Average user installs 0 apps a month and visit over 100 websites a month.

##Native Apps:
###Advantages:

* Fast and quick to respond
* smooth consistent self contained UI
* works consistently well off line

###Disadvantages:

* different languages between android, IOS(and other platforms) and web
* expensive to develop
* application process to get into app store.
* slow inconsistent upgrades(you rely on users to upgrade)
* apps don’t have longevity(users might un install them)

#PWA’s to the rescue:

##What are PWA’s?

Progressive Web Apps are the return of the web and the first proper contender to native applications. Take your web products and make them work off line, get notification options and keep them up-to-date without pestering the user. Written in js.

##Companies with PWA’s:

* [link A](https://themanifest.com/app-development/11-examples-progressive-web-apps)
* [Link B](https://pwa.rocks)

##Why PWA’s

* Have most of the benefits of native Apps; performance
* write once work everywhere
* fast with slow network.
* off line.
* consistent UI

##Limitations

* Not reliable for sold apps.
* Not be able to access some of the mobile device feature/sensors.(May change with time)


#Getting Started:

##Service worker:

proxy server -  sits between browser and the network
A service worker is a type of web worker. It's essentially a JavaScript file that runs separately from the main browser thread, intercepting network requests, caching or retrieving resources from the cache, and delivering push messages.

The service worker can't access the DOM directly. To communicate with the page, the service worker uses the postMessage() method to send data and a "message" event listener to receive data.

A service worker is a programmable network proxy that lets you control how network requests from your page are handled.

Service workers only run over HTTPS. Because service workers can intercept network requests and modify responses, "man-in-the-middle" attacks could be very bad.

The service worker becomes idle when not in use and restarts when it's next needed. You cannot rely on a global state persisting between events. If there is information that you need to persist and reuse across restarts, you can use IndexedDB databases.

Service workers make extensive use of promises, so if you're new to promises, then you should stop reading this and check out [Promises, an introduction](https://developers.google.com/web/fundamentals/primers/promises).

##Caching:

The Service Worker API comes with a Cache interface(cache API), that lets you create stores of responses keyed by request. While this interface was intended for service workers it is actually exposed on the window, and can be accessed from anywhere in your scripts. The entry point is caches.

You are responsible for implementing how your script (service worker) handles updates to the cache. All updates to items in the cache must be explicitly requested; items will not expire and must be deleted. However, if the amount of cached data exceeds the browser's storage limit, the browser will begin evicting all data associated with an origin, one origin at a time, until the storage amount goes under the limit again. See Browser storage limits and eviction criteria for more information.

Recomended for the network resources necessary to load your app while offline.

[For more information](https://developer.mozilla.org/en-US/docs/Web/API/Cache)

##Indexdb:

IndexedDB is a large-scale, NoSQL storage system. It lets you store just about anything in the user's browser. In addition to the usual search, get, and put actions, IndexedDB also supports transactions. Here is the definition of IndexedDB on MDN:

"IndexedDB is a low-level API for client-side storage of significant amounts of structured data, including files/blobs. This API uses indexes to enable high performance searches of this data. While DOM Storage is useful for storing smaller amounts of data, it is less useful for storing larger amounts of structured data. IndexedDB provides a solution."

Each IndexedDB database is unique to an origin (typically, this is the site domain or subdomain), meaning it cannot access or be accessed by any other origin. Data storage limits are usually quite large, if they exist at all, but different browsers handle limits and data eviction differently. See the Further reading section for more information.

Recommended For all other data.

[For more information](https://developers.google.com/web/ilt/pwa/working-with-indexeddb)
