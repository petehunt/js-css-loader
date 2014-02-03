# js css loader for webpack

## Problem

Sharing values between JS and CSS is hard, and CSS preprocessors kind of suck.

## Usage

Define styles like this (uses [React](http://facebook.github.io/react) CSS conventions):

```
module.exports = {
  '.topMarginSmall': {
    marginTop: require('./constants').SMALL_UNIT
  }
};
```

This will `require()` the file at build time (so you get the full power of JS. `_.extend()` for SASS-style mixins etc) and look at the exports to create CSS that looks like this:

```
.topMarginSmall {
  margin-top: 5px;
}
```

Use it like this:

``` javascript
// You can use webpack.config.js to get rid of all the !loader stuff.
require("style!css!js-css!./file.css.js");

// Stylesheet now available with topMarginSmall class name
```

NOTE: for fast build times you should keep the dep graphs of these modules small. Maybe they are only allowed to `require()` modules with `.style.js` in the name, and those modules are only allowed to `require()` other `.style.js` modules.
