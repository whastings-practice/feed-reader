import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import { normalize } from 'normalizr';

import { request } from '../utils/sagaUtils';
import { clearErrors, receiveErrors, receiveFeeds, receiveFeed } from './actions';
import { feedsSchema, feedSchema } from './schemas';

export function* createFeed(url) {
  yield put(clearErrors());

  let response;
  try {
    response = yield call(axios.post, '/api/feeds', { feed: { url } });
  } catch(error) {
    yield put(receiveErrors(error.response.data.errors));
    return false;
  }
  const data = yield call(normalize, response.data, feedSchema);
  yield put(receiveFeed(data.entities));
  return true;
}

export function* loadFeeds() {
  const response = yield request({ url: '/api/feeds' });
  const data = yield call(normalize, response.data, feedsSchema);
  yield put(receiveFeeds(data.entities));
}

export function* loadFeed(id) {
  const response = yield call(axios.get, `/api/feeds/${id}`);
  const data = yield call(normalize, response.data, feedSchema);
  yield put(receiveFeed(data.entities));
}
