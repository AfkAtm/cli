"use strict";

let versionMap = {
  "aurelia-animator-css": "^1.0.0-beta.2.0.1",
  "aurelia-bootstrapper": "^1.0.0-beta.2.0.1",
  "aurelia-cli": "^0.12.0",
  "aurelia-fetch-client": "^1.0.0-beta.2.0.1",
  "aurelia-testing": "^0.4.2",
  "aurelia-tools": "^0.2.2",
  "autoprefixer": "",
  "babel-eslint": "^6.0.4",
  "babel-plugin-syntax-flow": "^6.8.0",
  "babel-plugin-transform-decorators-legacy": "^1.3.4",
  "babel-plugin-transform-es2015-modules-amd": "^6.8.0",
  "babel-plugin-transform-es2015-modules-commonjs": "^6.10.3",
  "babel-plugin-transform-flow-strip-types": "^6.8.0",
  "babel-preset-es2015": "^6.9.0",
  "babel-preset-es2015-loose": "^7.0.0",
  "babel-preset-stage-1": "^6.5.0",
  "babel-polyfill": "^6.9.1",
  "babel-register": "^6.9.0",
  "bluebird": "^3.4.1",
  "browser-sync": "^2.13.0",
  "gulp": "github:gulpjs/gulp#4.0",
  "gulp-babel": "^6.1.2",
  "gulp-changed-in-place": "^2.0.3",
  "gulp-eslint": "^2.0.0",
  "gulp-notify": "^2.2.0",
  "gulp-plumber": "^1.1.0",
  "gulp-rename": "^1.2.2",
  "gulp-sourcemaps": "^2.0.0-alpha",
  "gulp-less": "^3.1.0",
  "gulp-postcss": "6.1.1",
  "gulp-sass": "^2.3.2",
  "gulp-stylus": "^2.5.0",
  "gulp-typescript": "^2.13.6",
  "gulp-tslint": "^5.0.0",
  "jasmine-core": "^2.4.1",
  "karma": "^0.13.22",
  "karma-chrome-launcher": "^1.0.1",
  "karma-jasmine": "^1.0.2",
  "karma-babel-preprocessor": "^6.0.1",
  "karma-typescript-preprocessor": "^0.2.1",
  "minimatch": "^3.0.2",
  "through2": "^2.0.1",
  "tslint": "^3.11.0",
  "typings": "^1.3.0",
  "typescript": ">=1.9.0-dev || ^2.0.0",
  "uglify-js": "^2.6.3"
};

exports.getSupportedVersion = function(name) {
  return versionMap[name] || 'latest';
};