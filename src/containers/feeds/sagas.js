import { call, fork, put, takeLatest } from 'redux-saga/effects';

import { ROUTE_FEEDS, renderLoading, renderRoute } from '../../actions';
import { loadFeeds } from '../../entities/sagas';

function* load() {
  yield takeLatest(ROUTE_FEEDS, function* () {
    yield put(renderLoading());
    yield call(loadFeeds);
    yield put(renderRoute('feeds'));
  });
}

export default function* feedSaga() {
  yield fork(load);
}
