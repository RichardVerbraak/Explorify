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

##### Webpack Config

A list of some options you can use in the webpack.config file
webpack-cli package enables you to create a custom config since webpack v4 doesn't even expect one
webpack-dev-server for obvious reasons

###### Loaders

These can be configured inside a rules arrray which is under the "module" config object.
This tells "Hey Webpack compiler when you come across a path that ends with a .js or .jsx file inside an import or require statement -
use this (for example babel-loader) to transform it before you add it to the bundle.js file

In other words, you tell webpack to determine how to minify and bundle the said files

NOTE: Images, fonts, icons etc. can now be used without loaders like url and file-loader thanks to Asset Modules since Webpack v5

============================

## Backend

### Express

### SpotifyAPI
