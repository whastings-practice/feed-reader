import { combineReducers } from 'redux';
import {
  CLEAR_ERRORS,
  RECEIVE_ERRORS,
  RECEIVE_FEEDS,
  RECEIVE_FEED,
  RECEIVE_POSTS,
} from './actions';

function errorsReducer(state = null, action) {
  switch(action.type) {
    case CLEAR_ERRORS:
      return null;
    case RECEIVE_ERRORS:
      return { ...action.payload };
    default:
      return state;
  }
}

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
  errors: errorsReducer,
  feeds: feedsReducer,
  posts: postsReducer,
});
