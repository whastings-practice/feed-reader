import { fork } from 'redux-saga/effects';

import entitiesSaga from './entities/sagas';

export default function* rootSaga() {
  yield fork(entitiesSaga);
}
