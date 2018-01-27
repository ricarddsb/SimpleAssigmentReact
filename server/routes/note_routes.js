const mockData = require('../mockData/mockData.json');

module.exports = function (app) {
  app.get('/api/v1/news', (req, res) => {
    const auth = { login: 'sad', password: '123' };
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (!login || !password || login !== auth.login || password !== auth.password) {
      res.set('WWW-Authenticate', 'Basic realm="nope"');
      res.status(401).send('You shall not pass.');
      return;
    }
    res.send(JSON.stringify(mockData));
  });

  app.get('/api/v1/news/:id', (req, res) => {
    const auth = { login: 'sad', password: '123' };
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');
    const newsItem = mockData['news'][req.params.id];
    if (!login || !password || login !== auth.login || password !== auth.password) {
      res.set('WWW-Authenticate', 'Basic realm="nope"'); // change this
      res.status(401).send('You shall not pass.');// custom message
      return;
    }
    res.send(JSON.stringify(newsItem));
  });
};
