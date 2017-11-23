export const CLOSE_ADD_FEED = 'Feeds/CLOSE_ADD_FEED';
export const OPEN_ADD_FEED = 'Feeds/OPEN_ADD_FEED';
export const SUBMIT_ADD_FEED = 'Feeds/SUBMIT_ADD_FEED';

export function closeAddFeed() {
  return { type: CLOSE_ADD_FEED };
}

export function openAddFeed() {
  return { type: OPEN_ADD_FEED };
}

export function submitAddFeed(url) {
  return {
    type: SUBMIT_ADD_FEED,
    payload: { url },
  };
}
