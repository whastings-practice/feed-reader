import { schema } from 'normalizr';

export const postSchema = new schema.Entity('posts');

export const postsSchema = new schema.Array(postSchema);

export const feedSchema = new schema.Entity('feeds');

export const feedsSchema = new schema.Array(feedSchema);
