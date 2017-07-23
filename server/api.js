const db = require('./db');
const express = require('express');

const app = express();

app.get('/feeds', (req, res) => {
  db.getFeeds().then((feeds) => res.json(feeds));
});

app.get('/feeds/:id', (req, res) => {
  const feedId = parseInt(req.params.id, 10);
  db.getFeed(feedId).then((feed) => res.json(feed));
});

module.exports = app;
