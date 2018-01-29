import express from 'express';
import newsRoutes from './routes';

const app = express();

const port = 8001;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested With, Content-Type, Accept, Authorization',
  );
  next();
});

newsRoutes(app, {});

app.listen(port, () => {
  console.log('We are live on ', port);
});
