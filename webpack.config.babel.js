import devConfig from './webpack/dev.config';
import distConfig from './webpack/dist.config';

const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;
console.log('aver ', TARGET);
if (TARGET === 'dev' || !TARGET) {
  module.exports = devConfig;
} else if (TARGET === 'dist') {
  console.log('entered dist');
  module.exports = distConfig;
}
