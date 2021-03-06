npm-run-posix-or-windows
========================

[![NPM version](http://img.shields.io/npm/v/npm-run-posix-or-windows.svg)](https://www.npmjs.org/package/npm-run-posix-or-windows)
[![Dependency Status](https://david-dm.org/madarche/npm-run-posix-or-windows.svg)](https://david-dm.org/madarche/npm-run-posix-or-windows)
[![devDependency Status](https://david-dm.org/madarche/npm-run-posix-or-windows/dev-status.svg)](https://david-dm.org/madarche/npm-run-posix-or-windows#info=devDependencies)
[![Build Status](https://travis-ci.org/madarche/npm-run-posix-or-windows.svg?branch=master)](https://travis-ci.org/madarche/npm-run-posix-or-windows)

This is a very lightweight and straightforward module that proposes a simple,
yet limited, solution to write portable NPM scripts when those have to work on
Windows too (the hell with Windows, hopefully someday all developers will be
working on Unix).

Use `npm-run-posix-or-windows` in NPM `scripts` to run an alternative script
when the script is run under Windows. When under Windows the script name is then
suffixed with `:windows`.

Usage:

```json
{
  "name": "some-package-name",
  "version": "1.0.0",
  "author": "SomeOne",
  "scripts": {
    "postinstall": "npm prune && npm-run-posix-or-windows postinstall:leveldown",
    "postinstall:leveldown": "cd node_modules/pouchdb/node_modules/leveldown && node-gyp rebuild --target=$npm_package_dependencies_electron_prebuilt --dist-url=https://atom.io/download/atom-shell",
    "postinstall:leveldown:windows": "cd node_modules/pouchdb/node_modules/leveldown && node-gyp rebuild --target=%npm_package_dependencies_electron_prebuilt% --dist-url=https://atom.io/download/atom-shell",
    "start": "electron ."
  },
  "dependencies": {
    "bluebird": "3.3.3",
    "electron-prebuilt": "0.36.7",
    "npm-run-posix-or-windows": "2.0.0",
    "pouchdb": "5.2.1"
  }
}
```
