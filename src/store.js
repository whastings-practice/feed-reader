import { createStore as createReduxStore, applyMiddleware, combineReducers } from 'redux';
import { connectRoutes } from 'redux-first-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import routes from './routes';
import createHistory from 'history/createBrowserHistory';
import reducers from './reducers';
import rootSaga from './sagas';

const routerOptions = {
  initialDispatch: false,
};

export default function createStore() {
  const history = createHistory();
  const connectedRoutes = connectRoutes(
    history,
    routes,
    routerOptions,
  );
  const sagaMiddleware = createSagaMiddleware();

  const rootReducer = combineReducers({ ...reducers, location: connectedRoutes.reducer });
  const middlewareEnhancer = applyMiddleware(connectedRoutes.middleware, sagaMiddleware);
  const enhancers = composeWithDevTools(connectedRoutes.enhancer, middlewareEnhancer);

  const store = createReduxStore(rootReducer, enhancers);

  sagaMiddleware.run(rootSaga);
  connectedRoutes.initialDispatch();

  return store;
}
