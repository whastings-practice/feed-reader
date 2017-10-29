import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import { normalize } from 'normalizr';

import { receiveFeeds, receiveFeed } from './actions';
import { feedsSchema, feedSchema } from './schemas';

export function* loadFeeds() {
  const response = yield call(axios.get, '/api/feeds');
  const data = yield call(normalize, response.data, feedsSchema);
  yield put(receiveFeeds(data.entities));
}

export function* loadFeed(id) {
  const response = yield call(axios.get, `/api/feeds/${id}`);
  const data = yield call(normalize, response.data, feedSchema);
  yield put(receiveFeed(data.entities));
}
