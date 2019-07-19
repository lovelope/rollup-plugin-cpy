# rollup-plugin-cpy2

[![Greenkeeper badge](https://badges.greenkeeper.io/lovelope/rollup-plugin-cpy.svg)](https://greenkeeper.io/)

*Very* basic rollup plugin to copy static assets over to you public directory. Files are copied using [cpy](https://github.com/sindresorhus/cpy) 

## Installation

This package can be installed using npm:

```
npm install rollup-plugin-cpy2
```

## Usage

Add the following lines to your `rollup.config.js`:

```javascript
import copy from 'rollup-plugin-cpy2';

...

export default {
    ...
    plugins: [
        ...
        copy({
          src: ['**/*.less'],
          dest: path.resolve(__dirname, '../es/'),
          options: {
            cwd: path.resolve(__dirname, '../src/components/'),
            parents: true,
            rename: basename => `style/${basename}`,
          },
        }),
        ...
    ]
    ...
}
```

## Options

* `src`: `<array>` : glob style filenames
* `dest`: `<string>` : assets to copy to
* `options`: `<object>` : cpy config options
* `cwd`: `<string>` : Working directory to find source files.  (default is `process.cwd()`)
* `parents`: `<boolean>` : Preserve path structure.  (default is `false`)
* `rename`: `<string|function>` : Filename or function returning a filename used to rename every file in files.  (default is `null`) 


