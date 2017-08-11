import { fork } from 'redux-saga/effects';

import { createRouteLoaderSaga } from '../../utils/sagaUtils';
import { ROUTE_FEEDS } from '../../actions';
import { loadFeeds } from '../../entities/sagas';

const feedsRouteLoader = createRouteLoaderSaga(ROUTE_FEEDS, 'feeds', loadFeeds);

export default function* feedSaga() {
  yield fork(feedsRouteLoader);
}
