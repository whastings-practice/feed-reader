import { call, fork, put, takeLatest } from 'redux-saga/effects';

import { ROUTE_FEED, renderLoading, renderRoute } from '../../actions';
import { loadFeed } from '../../entities/sagas';

function* load() {
  yield takeLatest(ROUTE_FEED, function* (action) {
    const { id } = action.payload;
    yield put(renderLoading());
    yield call(loadFeed, id);
    yield put(renderRoute('feed'));
  });
}

export default function* feedSaga() {
  yield fork(load);
}
