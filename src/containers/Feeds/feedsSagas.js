import { call } from 'redux-saga/effects';

import { loadFeeds } from '../../entities/sagas';

export default function* feedsSaga() {
  yield call(loadFeeds);
}
