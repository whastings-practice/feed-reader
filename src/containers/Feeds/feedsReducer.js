import { CLOSE_ADD_FEED, OPEN_ADD_FEED } from './feedsActions';

const DEFAULT_STATE = {
  isAddFeedOpen: false,
};

export default function feedsReducer(state = DEFAULT_STATE, action) {
  switch(action.type) {
    case CLOSE_ADD_FEED:
      return { ...state, isAddFeedOpen: false };
    case OPEN_ADD_FEED:
      return { ...state, isAddFeedOpen: true };
    default:
      return state;
  }
}
