import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { showRoute, switchRoute } from '../actions';

export function createRouteLoaderSaga(routeAction, routeName, wrappedSaga = null) {
  return function* routeLoaderSaga() {
    yield takeLatest(routeAction, function* (action) {
      yield put(switchRoute(routeName));
      if (wrappedSaga) {
        yield call(wrappedSaga, action);
      }
      yield put(showRoute());
    });
  };
}

export function request({ url, method = 'get', params = null }) {
  return params ? call(axios[method], url, params) : call(axios[method], url);
}
