var postcss = require('postcss');
var bemLinter = require('postcss-bem-linter');
var reporter = require('postcss-reporter');

module.exports = {
  use: [
    "postcss-import",
    "postcss-custom-properties",
    "autoprefixer"
  ],
  "postcss-import": {
    transform: function(css) {
      return postcss([bemLinter, reporter]).process(css).css;
    }
  }
};
