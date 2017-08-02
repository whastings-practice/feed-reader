import { createSelector } from 'reselect';

export const getFeeds = createSelector(
  (state) => state.entities.feeds,
  (feeds) => Object.keys(feeds)
    .map((id) => feeds[id])
    .sort((feed1, feed2) => feed1.id - feed2.id),
);

export const getCurrentFeed = createSelector(
  (state) => state.location.payload.id,
  (state) => state.entities.feeds,
  (state) => state.entities.posts,
  (id, feeds, posts) => {
    const feed = feeds[id];
    return {
      ...feed,
      posts: feed.posts.map((postId) => posts[postId]),
    };
  }
);
