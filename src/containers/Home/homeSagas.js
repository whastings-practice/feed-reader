import { fork } from 'redux-saga/effects';

import { createRouteLoaderSaga } from '../../utils/sagaUtils';
import { ROUTE_HOME } from '../../actions';

const homeRouteLoader = createRouteLoaderSaga(ROUTE_HOME, 'home');

export default function* homeSaga() {
  yield fork(homeRouteLoader);
}
