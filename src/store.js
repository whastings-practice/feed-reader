import { createStore as createReduxStore, applyMiddleware, compose, combineReducers } from 'redux';
import { connectRoutes } from 'redux-first-router';
import createSagaMiddleware from 'redux-saga';
import routes from './routes';
import createHistory from 'history/createBrowserHistory';
import reducers from './reducers';
import rootSaga from './sagas';

export default function createStore() {
  const history = createHistory();
  const connectedRoutes = connectRoutes(
    history,
    routes,
  );
  const sagaMiddleware = createSagaMiddleware();

  const rootReducer = combineReducers({ ...reducers, location: connectedRoutes.reducer });
  const middlewareEnhancer = applyMiddleware(connectedRoutes.middleware, sagaMiddleware);
  const enhancers = compose(connectedRoutes.enhancer, middlewareEnhancer);

  const store = createReduxStore(rootReducer, enhancers);

  sagaMiddleware.run(rootSaga);

  return store;
}
