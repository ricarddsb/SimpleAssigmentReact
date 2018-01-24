import * as path from 'path';
import pkg from '../package.json';

export default {
  // Constant with our paths
  paths: {
    dist: path.join(__dirname, '../dist'),
    nodeModules: path.join(__dirname, '../node_modules'),
    client: path.join(__dirname, '../client'),
  },
  pkg,
  filename: pkg.name,
  library: 'SimpleAssigmentReact',
};

