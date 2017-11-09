import { fork } from 'redux-saga/effects';

import feedSaga from './containers/Feed/feedSagas';
import feedsSaga from './containers/Feeds/feedsSagas';
import homeSaga from './containers/Home/homeSagas';

export default function* rootSaga() {
  yield fork(feedSaga);
  yield fork(feedsSaga);
  yield fork(homeSaga);
}
