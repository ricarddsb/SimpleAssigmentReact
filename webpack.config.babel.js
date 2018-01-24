const devConfig = require('./webpack/dev.config');

const TARGET = process.env.npm_lyfecycle_event;
process.env.BABEL_ENV = TARGET;

if (TARGET === 'dev' || !TARGET) {
  module.exports = devConfig.dev;
}
