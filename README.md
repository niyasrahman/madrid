# Madrid

Madrid is the demo app using [Malibu](https://github.com/quintype/malibu) as a starting point.

## Initial Collection setup
- We need a home collection whose name can be anything, but the slug mandatorily has to be **home**.
- This home collection will hold all the collections('child collections' in our nomenclature) that will appear on home page.
- Only stories added to these child collections will be displayed in the home page. Any collections added within these child collections will be ignored.
- The layout of each collection on homepage will be decided based on the associated metadata called **layout** set using the **manage** button against each collection. Right now, this option is a text field. This will be locked to a dropdown later. Until then, the text field can have only the following values:
    - FullscreenCarousel
    - TwoColOneAd
    - FullscreenSimpleSlider
    - ThreeCol
    - FullscreenLinearGallerySlider
    - TwoCol
    - LShapeOneWidget
    - FullscreenMediaList
 - If the value of layout is anything other than the above mentioned values, it will fall back to **ThreeCol** layout.

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
1. We should change the configuration in production black knight as below to enable mapping to
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
2. Google Analytics ID and GTM ID should be served from the config ( *publisher.yml* file ) from appropriate publisher object, like all other values.
```
...
samachara:
    monogram: <monogram_url>
    logo: <logo_url>
    primary_color: "#2f73e4"
    secondary_color: "#a3a3a3"
    header_text_color: "#404040"
    header_background_color: "#FFF"
    footer_text_color: "#FFF"
    footer_background_color: "#000"
    dfp_network_id: '60988533'
    gtm_id: 'GTM-M7935QR'
    google_analytics_id: 'UA-72244642-1'
...
```
