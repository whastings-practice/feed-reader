import { schema } from 'normalizr';

export const postSchema = new schema.Entity('posts');

export const feedSchema = new schema.Entity('feeds', {
  posts: [postSchema],
});

export const feedsSchema = new schema.Array(feedSchema);
