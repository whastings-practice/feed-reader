export const CLOSE_ADD_FEED = 'CLOSE_ADD_FEED';
export const OPEN_ADD_FEED = 'OPEN_ADD_FEED';

export function closeAddFeed() {
  return { type: CLOSE_ADD_FEED };
}

export function openAddFeed() {
  return { type: OPEN_ADD_FEED };
}
