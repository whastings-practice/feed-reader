import { combineReducers } from 'redux';
import { RECEIVE_FEEDS, RECEIVE_FEED, RECEIVE_POSTS } from './actions';

function feedsReducer(state = {}, action) {
  switch(action.type) {
    case RECEIVE_FEEDS:
    case RECEIVE_FEED:
      return { ...state, ...action.payload.feeds};
    default:
      return state;
  }
}

function postsReducer(state = {}, action) {
  switch(action.type) {
    case RECEIVE_POSTS:
    case RECEIVE_FEED:
      const { posts } = action.payload;
      return { ...state, ...posts };
    default:
      return state;
  }
}

export default combineReducers({
  feeds: feedsReducer,
  posts: postsReducer,
});
