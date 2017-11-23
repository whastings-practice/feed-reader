import { call, fork, put, takeLatest } from 'redux-saga/effects';

import { SUBMIT_ADD_FEED, closeAddFeed } from './feedsActions';
import { createFeed, loadFeeds } from '../../entities/sagas';

function* addFeedSaga() {
  yield takeLatest(SUBMIT_ADD_FEED, function* (action) {
    yield call(createFeed, action.payload.url);
    yield put(closeAddFeed());
  });
}

export function* loadFeedsListSaga() {
  yield call(loadFeeds);
}

export default function* feedsSaga() {
  yield fork(addFeedSaga);
}
