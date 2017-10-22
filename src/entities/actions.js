export const RECEIVE_FEEDS = 'RECEIVE_FEEDS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export function receiveFeeds(feeds) {
  return {
    type: RECEIVE_FEEDS,
    payload: feeds,
  };
}

export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    payload: posts,
  };
}
