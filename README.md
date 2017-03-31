# React JS Minimal

Pull the git and ready for further react implementation.

You have to run command 
`npm run test` 

this will build the current jsx files, and will start the watch on jsx file directory, and 
concurrently it will start lite-server to serve the index.html page to browser.

So we can make the changes directly to JSX file, it will be compiled .js file, and then lite-server 
will refresh the browser to push the new js changes to UI.

-----
**Result  in Browser**

![Output](https://image.ibb.co/mreT8v/Capture.png)
-----
We are using [Babel-cli](https://www.npmjs.com/package/babel-cli) to transpile the jsx to js.
configuration file for Bable is - 

File :  **.babelrc**
```js
{
    "presets" : ["es2015","react"]
}
```

-----
using the [SystemJs](https://www.npmjs.com/package/systemjs) to load the module to the page.

File :  **systemjs.config.js**
```js
SystemJS.config({
    map:{
        'react':'/script/lib/react/react',
        'react-dom':'/script/lib/react/react-dom',
        'Welcome':'/script/build/Welcome',
        'App':'/script/build/App',
        'avatar':'/script/build/Avatar',
        'main':'/script/main',
    },
    packages:{
        '/script':{defaultExtension:'js'}
    }
})
```
-----
npm package.json file.

File :  **package.json**
```js
{
  ..
  ..  
  "scripts": {
    "build": "babel script/src -d script/build",
    "execute": "lite-server",
    "watch":"watch-run -p script/src/*.* npm run build",
    "test": "npm run build && concurrently \"npm run watch\" \"npm run execute\""
  },
  ..
  ..
  "dependencies": {
    "systemjs": "^0.20.10"
  },  
  ..
  ..
  "devDependencies": {
    "babel-cli": "^6.24.0",
    "babel-preset-es2015": "^6.24.0",
    "babel-preset-react": "^6.23.0",
    "concurrently": "^3.4.0",
    "lite-server": "^2.3.0",
    "watch-run": "^1.2.5"
  },  
  ..
  ..
}
```
