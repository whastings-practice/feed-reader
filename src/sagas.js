import { call, fork, put, takeLatest } from 'redux-saga/effects';

import feedSaga from './containers/Feed/feedSagas';
import feedsSaga, { loadFeedsListSaga } from './containers/Feeds/feedsSagas';
import homeSaga from './containers/Home/homeSagas';

import { BOOT_APP, showApp } from './actions';

function* bootApp() {
  yield takeLatest(BOOT_APP, function* () {
    yield call(loadFeedsListSaga);
    yield put(showApp());
  });
}

export default function* rootSaga() {
  yield fork(bootApp);
  yield fork(feedSaga);
  yield fork(feedsSaga);
  yield fork(homeSaga);
}
