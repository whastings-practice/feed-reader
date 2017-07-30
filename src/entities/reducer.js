import { combineReducers } from 'redux';
import { RECEIVE_FEEDS } from './actions';

function feedsReducer(state = {}, action) {
  switch(action.type) {
    case RECEIVE_FEEDS:
      return { ...state, ...action.payload.feeds};
    default:
      return state;
  }
}

function postsReducer(state = {}, action) {
  switch(action.type) {
    case RECEIVE_FEEDS:
      const { posts } = action.payload;
      if (posts) {
        return { ...state, ...posts };
      }
    default:
      return state;
  }
}

export default combineReducers({
  feeds: feedsReducer,
  posts: postsReducer,
});
