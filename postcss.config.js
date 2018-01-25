const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const precss = require('precss');
const postcssImport = require('postcss-import');

module.exports = {
  plugins: [
    autoprefixer,
    cssnano,
    postcssImport,
    precss,
  ],
};
