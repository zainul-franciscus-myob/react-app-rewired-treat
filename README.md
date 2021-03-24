# react-app-rewired with treat js

This is imported into the react-app-rewired app and build with the webpack config-overides.js.

The primary focus of this repo is to test the webpack `config-overrides.js` to enable Apps to compile `lib-component` treat.

Install dependencies
```
npm i
```

Add npm link 
```
cd lib-components
npm link
cd ..
npm link lib-components
```

Start the local environment
```
npm start
```

Build the app
```
npm run build
```

### Errors:
- When `mini-css-extract-plugin` is added to the webpack config to export static CSS files errors occur when building the app.
- No errors with build when style-loader used to inject styles into the page.

