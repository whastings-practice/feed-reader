import { fork } from 'redux-saga/effects';

import feedSaga from './containers/feed/sagas';
import feedsSaga from './containers/feeds/sagas';
import homeSaga from './containers/home/sagas';

export default function* rootSaga() {
  yield fork(feedSaga);
  yield fork(feedsSaga);
  yield fork(homeSaga);
}
