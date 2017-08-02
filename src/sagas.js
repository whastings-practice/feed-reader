import { fork } from 'redux-saga/effects';

import feedSaga from './containers/feed/sagas';
import feedsSaga from './containers/feeds/sagas';

export default function* rootSaga() {
  yield fork(feedSaga);
  yield fork(feedsSaga);
}
