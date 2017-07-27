import { createStore as createReduxStore, applyMiddleware, compose, combineReducers } from 'redux';
import { connectRoutes } from 'redux-first-router';
import routes from './routes';
import createHistory from 'history/createBrowserHistory';
import reducers from './reducers';

export default function createStore() {
  const history = createHistory();
  const connectedRoutes = connectRoutes(
    history,
    routes,
  );

  const rootReducer = combineReducers({ ...reducers, location: connectedRoutes.reducer });
  const middlewareEnhancer = applyMiddleware(connectedRoutes.middleware);
  const enhancers = compose(connectedRoutes.enhancer, middlewareEnhancer);

  return createReduxStore(rootReducer, enhancers);
}
