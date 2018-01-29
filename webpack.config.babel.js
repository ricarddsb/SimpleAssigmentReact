import devConfig from './webpack/dev.config';

const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

if (TARGET === 'dev' || !TARGET) {
  module.exports = devConfig;
}
