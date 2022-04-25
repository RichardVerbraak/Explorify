# Project Notes

============================

## Frontend

### Creating a React Application without CRA

    -   Create a package.json file and install both react and react-dom

    -   Setup a .babelrc file with @babel/preset-react to transpile the "React code" to regular JavaScript

    -   Install webpack & webpack-cli so the import syntax works since all of the imported code gets bundled into one file

    -   Create a webpack.config.js file and setup your entry + output files
        and install and add babel-loader to transpile said files before bundling

### Webpack Notes

Webpack is used to minify and then bundle all of your (JS) files together so your end user downloads only a single minified bundle.js file.
Based on the configuration, it will look up the files and bundle it appropriately.

#### Loaders

Loaders will determine how to minify and bundle the css and JS

============================

## Backend

### Express

### SpotifyAPI
