import News from '../models/news';

export async function getNews(req, res) {
  return News.find().exec((err, news) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ news });
  });
}

export async function getNewsById(req, res) {
  return News.findOne({ id: req.params.id }).exec((err, newsItem) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ newsItem });
  });
}
