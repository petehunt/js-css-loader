var CSSPropertyOperations = require('react/lib/CSSPropertyOperations');

module.exports = function(content) {
  this.cacheable && this.cacheable();
  var stylesheet = this.exec(content, this.resourcePath);

  if (stylesheet.__esModule) {
    stylesheet = stylesheet.default;
  }

  var css = '';

  for (var k in stylesheet) {
    if (!stylesheet.hasOwnProperty(k)) {
      continue;
    }

    var value = stylesheet[k];

    k = k.trim();
    if (k[0] === '@' && k !== '@font-face') {
      // media query
      css += k + '{\n';
      for (var subkey in value) {
        if (!value.hasOwnProperty(subkey)) {
          continue;
        }

        css += subkey + ' {\n' + CSSPropertyOperations.createMarkupForStyles(value[subkey]) + '\n}\n';
      }
      css += '\n}\n';
    } else {
      css += k + ' {\n' + CSSPropertyOperations.createMarkupForStyles(value) + '\n}\n';
    }
  }

  return css;
};
