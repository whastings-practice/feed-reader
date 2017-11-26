import { call, fork, put, takeLatest } from 'redux-saga/effects';

import {
  SUBMIT_ADD_FEED,
  closeAddFeed,
  startAddFeedSubmitting,
  stopAddFeedSubmitting
} from './feedsActions';
import { createFeed, loadFeeds } from '../../entities/sagas';

function* addFeedSaga() {
  yield takeLatest(SUBMIT_ADD_FEED, function* (action) {
    yield put(startAddFeedSubmitting());
    const wasFeedCreated = yield call(createFeed, action.payload.url);
    if (wasFeedCreated) {
      yield put(closeAddFeed());
    }
    yield put(stopAddFeedSubmitting());
  });
}

export function* loadFeedsListSaga() {
  yield call(loadFeeds);
}

export default function* feedsSaga() {
  yield fork(addFeedSaga);
}
