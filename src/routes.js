import { requestFeeds, requestFeed } from './entities/actions';

export default {
  ROUTE_HOME: '/',
  ROUTE_FEEDS: {
    path: '/feeds',
    thunk(dispatch) {
      dispatch(requestFeeds());
    },
  },
  ROUTE_FEED: {
    path: '/feeds/:id',
    thunk(dispatch, getState) {
      const { id } = getState().location.payload;
      dispatch(requestFeed(id));
    },
  },
};
