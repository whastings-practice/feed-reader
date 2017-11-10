import { createSelector } from 'reselect';
import { denormalize } from 'normalizr';

import { feedSchema } from './schemas';

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
    return denormalize(feed, feedSchema, { posts });
  },
);
