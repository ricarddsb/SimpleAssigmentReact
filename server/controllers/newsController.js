import News from '../models/news';

export function getNews(req, res) {
  return News.find({}, (err, news) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ news });
  });
}

export function getNewsById(req, res) {
  return News.findOne({ id: req.params.id }, (err, newsItem) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ newsItem });
  });
}
