import * as path from 'path';
import pkg from '../package.json';

export default {
  paths: {
    dist: path.join(__dirname, '../dist'),
    nodeModules: path.join(__dirname, '../node_modules'),
    client: path.join(__dirname, '../client'),
  },
  pkg,
  filename: pkg.name,
  library: 'SimpleAssigmentReact',
};

