# react-app-rewired with treat js

This is is test POC created using create react app and react-app-rewired.

It includes a external `lib-components` dir that has a component including treat js styling.

This is imported into the react-app-rewired app and build with the webpack config-overides.js.


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

