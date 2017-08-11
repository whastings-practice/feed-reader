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
