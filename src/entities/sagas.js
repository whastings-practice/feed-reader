import axios from 'axios';
import { call, fork, put, takeLatest } from 'redux-saga/effects';
import { REQUEST_FEED, REQUEST_FEEDS, receiveFeeds, receiveFeed } from './actions';

function* loadFeeds() {
  yield takeLatest(REQUEST_FEEDS, function* () {
    const response = yield call(axios.get, '/api/feeds');
    yield put(receiveFeeds(response.data));
  });
}

function* loadFeed() {
  yield takeLatest(REQUEST_FEED, function* (action) {
    const feedId = action.payload.id;
    const response = yield call(axios.get, `/api/feeds/${feedId}`);
    yield put(receiveFeed(response.data));
  });
}

export default function* entitiesSaga() {
  yield fork(loadFeeds);
  yield fork(loadFeed);
}
