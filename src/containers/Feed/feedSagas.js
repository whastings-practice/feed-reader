import { call, fork } from 'redux-saga/effects';

import { createRouteLoaderSaga } from '../../utils/sagaUtils';
import { ROUTE_FEED } from '../../actions';
import { loadFeed } from '../../entities/sagas';

const feedRouteLoader = createRouteLoaderSaga(ROUTE_FEED, 'feed', function* (action) {
  const { id } = action.payload;
  yield call(loadFeed, id);
});

export default function* feedSaga() {
  yield fork(feedRouteLoader);
}
