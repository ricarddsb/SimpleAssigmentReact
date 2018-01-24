import dev from './App.dev';

if (process.env.NODE_ENV !== 'production') {
  module.exports = dev;
}
