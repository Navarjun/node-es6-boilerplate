# node-es6-boilerplate
This is a boilerplate code for compiling ES6 into ES5 so it is compatible with all browsers. It uses webpack and gulpjs

## How to use
- Fork and clone the repo
- Install the dependencies using command:
`npm install`
- Add ES6 filenames you want to compile in the file `gulpfile.js` in an array named `files`
- run the command `gulp` to start the server and file watcher

After this, whenever a file would be updated in the `src` folder, it would be compiled and saved into `build` folder with same name (and a minified version)…

> All source code should be in the folder `src`

> To change the server command you can change `start-server` command in package.json
