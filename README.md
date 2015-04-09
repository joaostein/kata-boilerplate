# JavaScript Coding Dojo Kata Boilerplate

This is a boilerplate repository with basic files to start a Coding Dojo Section.  It includes:

* [Gulp](http://gulpjs.com/)
* [Mocha](http://mochajs.org/)
* [Chai](http://chaijs.com/)
* [JSHint](http://jshint.com/)

## Initial Setup
1. Clone the repository on your machine with `git clone <url>`
2. Rename the file `rename.js` to whatever name is appropriate
3. Update the information on `package.json` file
4. Run `npm install` to install dev dependencies

## Getting Started
After renaming the `rename.js` file, make sure to [exports your module](http://stackoverflow.com/questions/5311334/what-is-the-purpose-of-node-js-module-exports-and-how-do-you-use-it) and also `require` it on your `spec.js` file.

### How to run tests and lint

Run each command in individual terminal tabs:

1. `gulp test` -- to watch `spec.js` file
2. `gulp lint` -- to watch all `*.js` files

> Just write some code, save the file and see the automatically response (tests and linting) on terminal tabs.

## License
[MIT License](link) Copyright © 2015 Joao Stein
