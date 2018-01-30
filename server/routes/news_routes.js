// import mockData from '../mockData/mockData.json';
import { getNews, getNewsById } from '../controllers/newsController';

const auth = { login: '123', password: '123' };

export default function (app) {
  app.get('/api/v1/news', (req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (!login || !password || login !== auth.login || password !== auth.password) {
      res.status(401).send('You shall not pass.');
      return;
    }
    getNews(req, res).then(news => news);
  });

  app.get('/api/v1/news/:id', (req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');
    // const newsItem = mockData.news[req.params.id];
    if (!login || !password || login !== auth.login || password !== auth.password) {
      res.status(401).send('You shall not pass.');// custom message
      return;
    }
    getNewsById(req, res).then(newss => newss);
  });
}
