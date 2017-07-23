const feeds = [
  {
    id: 1,
    title: 'Ars Technica',
    url: 'https://arstechnica.com/feed',
  },
  {
    id: 2,
    title: 'Will Hastings - Blog',
    url: 'http://www.willhastings.me/feed',
  },
  {
    id: 3,
    title: 'Jake Archibald - Blog',
    url: 'https://jackarchibald.com/feed',
  },
];

const posts = [
  {
    title: 'Questions to Ask when Applying for a Dev Job',
    url: 'http://www.willhastings.me/blog/q2awa4adj',
    feedId: 2,
  },
  {
    title: 'Making a Tooltip',
    url: 'http://www.willhastings.me/blog/making-a-tooltip',
    feedId: 2,
  },
  {
    title: 'Oh no someone else got hacked!',
    url: 'https://arstechnica.com/oh-no',
    feedId: 1,
  },
  {
    title: 'Service Workers',
    url: 'https://jackarchibald.com/blog/1',
    feedId: 3,
  },
  {
    title: 'HTTP Caching',
    url: 'https://jackarchibald.com/blog/2',
    feedId: 3,
  },
  {
    title: 'Promises',
    url: 'https://jackarchibald.com/blog/3',
    feedId: 3,
  },
];

module.exports = {
  createFeed({ title, url }) {

  },
  getFeeds() {
    return Promise.resolve(feeds);
  },
  getFeed(id) {
    const feed = feeds.find((feed) => feed.id === id);
    const feedPosts = posts.filter((post) => post.feedId === id);
    return Promise.resolve(Object.assign({ posts: feedPosts }, feed));
  }
};
