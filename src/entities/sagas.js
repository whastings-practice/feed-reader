import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import { normalize } from 'normalizr';

import { receiveFeeds, receivePosts } from './actions';
import { feedsSchema, postsSchema } from './schemas';

export function* loadFeeds() {
  const response = yield call(axios.get, '/api/feeds');
  const data = yield call(normalize, response.data, feedsSchema);
  yield put(receiveFeeds(data.entities));
}

export function* loadFeed(id) {
  const response = yield call(axios.get, `/api/feeds/${id}/posts`);
  const data = yield call(normalize, response.data, postsSchema);
  yield put(receivePosts(data.entities));
}
