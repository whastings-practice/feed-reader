import {
  CLOSE_ADD_FEED,
  OPEN_ADD_FEED,
  START_ADD_FEED_SUBMITTING,
  STOP_ADD_FEED_SUBMITTING
} from './feedsActions';

const DEFAULT_STATE = {
  isAddFeedOpen: false,
  isAddFeedSubmitting: false,
};

export default function feedsReducer(state = DEFAULT_STATE, action) {
  switch(action.type) {
    case CLOSE_ADD_FEED:
      return { ...state, isAddFeedOpen: false };
    case OPEN_ADD_FEED:
      return { ...state, isAddFeedOpen: true };
    case START_ADD_FEED_SUBMITTING:
      return { ...state, isAddFeedSubmitting: true };
    case STOP_ADD_FEED_SUBMITTING:
      return { ...state, isAddFeedSubmitting: false };
    default:
      return state;
  }
}
