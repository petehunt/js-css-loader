var CSSPropertyOperations = require('react/lib/CSSPropertyOperations');

var path = require('path');

module.exports = function(content) {
	this.cacheable && this.cacheable();

  var stylesheet = require(path.resolve(this.resource));
  var css = '';
  for (var k in stylesheet) {
    if (!stylesheet.hasOwnProperty(k)) {
      continue;
    }
    css += '.' + k + ' {\n' + CSSPropertyOperations.createMarkupForStyles(stylesheet[k]) + '\n}\n';
  }

  return css;
};
