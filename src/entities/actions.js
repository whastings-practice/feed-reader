export const RECEIVE_FEEDS = 'RECEIVE_FEEDS';

export function receiveFeeds(feeds) {
  return {
    type: RECEIVE_FEEDS,
    payload: feeds,
  };
}
