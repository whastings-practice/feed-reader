export const CLEAR_ERRORS = 'entities/CLEAR_ERRORS';
export const RECEIVE_ERRORS = 'entities/RECEIVE_ERRORS';
export const RECEIVE_FEEDS = 'entities/RECEIVE_FEEDS';
export const RECEIVE_FEED = 'entities/RECEIVE_FEED';
export const RECEIVE_POSTS = 'entities/RECEIVE_POSTS';

export function clearErrors() {
  return { type: CLEAR_ERRORS };
}

export function receiveErrors(errors) {
  return {
    type: RECEIVE_ERRORS,
    payload: errors,
  };
}

export function receiveFeeds(feeds) {
  return {
    type: RECEIVE_FEEDS,
    payload: feeds,
  };
}

export function receiveFeed(data) {
  return {
    type: RECEIVE_FEED,
    payload: data,
  };
}

export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    payload: posts,
  };
}
