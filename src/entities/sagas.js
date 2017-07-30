import axios from 'axios';
import { call, fork, put, takeLatest } from 'redux-saga/effects';
import { normalize } from 'normalizr';

import { REQUEST_FEED, REQUEST_FEEDS, receiveFeeds } from './actions';
import { feedSchema, feedsSchema } from './schemas';

function* loadFeeds() {
  yield takeLatest(REQUEST_FEEDS, function* () {
    const response = yield call(axios.get, '/api/feeds');
    const data = yield call(normalize, response.data, feedsSchema);
    yield put(receiveFeeds(data.entities));
  });
}

function* loadFeed() {
  yield takeLatest(REQUEST_FEED, function* (action) {
    const feedId = action.payload.id;
    const response = yield call(axios.get, `/api/feeds/${feedId}`);
    const data = yield call(normalize, response.data, feedSchema);
    yield put(receiveFeeds(data.entities));
  });
}

export default function* entitiesSaga() {
  yield fork(loadFeeds);
  yield fork(loadFeed);
}
