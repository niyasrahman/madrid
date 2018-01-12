# Madrid

Madrid is the demo app using [Malibu](https://github.com/quintype/malibu) as a starting point.

## Initial Collection setup
We need collections with the following slugs for publishers to work with Madrid theme:
1. home
2. featured-stories
3. main-stories
4. must-read
5. politics
6. film
7. other
8. lifestyle
9. recent-stories

The collection slug restriction is temporary. It'll be changed to accept any collection once the necessary change is made in Itsman.

- The collections 2 through 9 has to be the children of `home` collection.
- Only the stories in those collections will be considered in homepage, and any collection added will be ignored.
- Even if collections with different slugs are added in the home collection, they should show up in a fallback layout. 
- So as long as there is a collection called home with some collections in them which has stories, the homepage should load.


## toddy-libs

IMPORTANT: This app implements very little functionality in the app itself. The majority of functionality is built into the [toddy-libs](https://github.com/quintype/quintype-toddy-libs) repository.

#### Running with supervisord (local)

```shell
$ brew install supervisord
$ ./run
```

### Working on the service worker

Unfortunately, the service-worker cannot be run with the asset-server. Thus, the service worker is disabled in development mode. To work on the service worker, run

```shell
$ vi app/client/app.js         # remove the check for process.env.NODE_ENV == 'production'
$ vi config/publisher.yml      # remove the asset_host from publisher.yml
$ npm run compile && npm start # restart this if you change the service worker
```

## Tasks Pending

- [X] Minify JS
- [X] Add SASS support
- [X] Add Components
- [X] Load Data
- [X] Isomorphic Rendering
- [ ] Get CORS working with ServiceWorker (possibly fix black knight)
- [ ] Get Preview to work
- [X] Get breaking news to work
- [X] Actually build a simple UI
- [ ] Forcibly update the app when updates
- [ ] Actual Benchmarks
- [X] Move all actual code into a library so people can't screw around
- [ ] Not Found Handler
- [ ] Valid Route, but data not found
- [ ] SEO Stuff
- [ ] Analytics stuff


### Note:
We should change the configuration in production black knight as below to enable mapping to 
different publishers to their own itsman.

```
asset_host: https://fea.quintype.com
host_to_api_host:
  "madrid.quintype.io": "quintype-demo.internal.quintype.io"
  "www.dyingtheartof.com": "dyingtheartof.internal.quintype.io"
host_to_automatic_api_host:
  - "-web"
  - ".madrid"
sketches_host: http://quintype-demo.internal.quintype.io
```
