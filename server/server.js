import express from 'express';
import mongoose from 'mongoose';
import serverConfig from './config/config';
import mockData from './mockData/mockData';
import newsRoutes from './routes';

const app = express();

const port = 8001;

// Set native promises as mongoose promise
mongoose.Promise = global.Promise;
// MongoDB Connection
mongoose.connect(serverConfig.mongoURL, (error) => {
  if (error) {
    console.error(`Please make sure Mongodb
      is installed and running!`); // eslint-disable-line no-console
    throw error;
  }
  console.log('entered instance');
  // feed some dummy data in DB.
  mockData();
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, Content-Type, Accept, Authorization',
  );
  next();
});

newsRoutes(app, {});

app.listen(port, () => {
  console.log('We are live on ', port);
});
