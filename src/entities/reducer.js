import { combineReducers } from 'redux';
import { RECEIVE_FEEDS, RECEIVE_FEED } from './actions';

function feedsReducer(state = [], action) {
  switch(action.type) {
    case RECEIVE_FEEDS:
      return action.payload;
    case RECEIVE_FEED:
      const receivedFeed = action.payload;
      return state.map((feed) => feed.id === receivedFeed.id ? receivedFeed : feed);
    default:
      return state;
  }
}

function postsReducer(state = [], action) {
  return state;
}

export default combineReducers({
  feeds: feedsReducer,
  posts: postsReducer,
});
