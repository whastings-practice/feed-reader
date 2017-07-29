export const RECEIVE_FEEDS = 'RECEIVE_FEEDS';
export const RECEIVE_FEED = 'RECEIVE_FEED';
export const REQUEST_FEEDS = 'REQUEST_FEEDS';
export const REQUEST_FEED = 'REQUEST_FEED';

export function receiveFeeds(feeds) {
  return {
    type: RECEIVE_FEEDS,
    payload: feeds,
  };
}

export function requestFeeds() {
  return {
    type: REQUEST_FEEDS,
  };
}

export function receiveFeed(feed) {
  return {
    type: RECEIVE_FEED,
    payload: feed,
  };
}

export function requestFeed(id) {
  return {
    type: REQUEST_FEED,
    payload: { id },
  };
}
