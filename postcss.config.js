import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import precss from 'precss';
import postcssImport from 'postcss-import';

export default {
  plugins: [
    autoprefixer,
    cssnano,
    postcssImport,
    precss,
  ],
};
