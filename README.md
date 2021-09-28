# leisurecenterfront
A simple exemple of market place build with Vuejs and MapBox, using the leisureCenter_Api on Api Platform.

## Intallation
Run:
```
git clone https://github.com/Siv-tspab/leisureCenter_MarketPlace.git

yarn install
```
Before starting and/or building the application, make to sure to replace the placeholders in the `.env` file with yout own Map Box Api key and your api endpoint:
```
VUE_APP_API_ENDPOINT=http://my_server/api/
VUE_APP_MB_API_KEY=Xx.XxxxxXxXXXXXXXXxxxxxXxXXXXXXxxxxXXXxXXXXXXX.XXXXxxXXXxxXXxxX
```
### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```
! Notice that when you build the app, the path could be wrong, make sure to check of all ressources in the `<head>` and `<script>` of `index.html` if it doesn't work. It may start by `/`, try to delete the `/` at the begining, like that:

```
        <link href="/css/app.535b19f7.css" rel="stylesheet" />
        ...
        <script src="/js/app.e079f431.js"></script>
```
To:

```
        <link href="css/app.535b19f7.css" rel="stylesheet" />
        ...
        <script src="js/app.e079f431.js"></script>
```
