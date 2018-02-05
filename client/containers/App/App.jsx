import dev from './App.dev';
import dist from './App.dist';

if (process.env.NODE_ENV === 'development') {
  module.exports = dev;
} else if (process.env.NODE_ENV === 'production') {
  module.exports = dist;
}
