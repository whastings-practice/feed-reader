import entitiesReducer from './entities/reducer';

import { RENDER_LOADING, RENDER_ROUTE } from './actions';

export default {
  currentRoute(state = 'home', action) {
    switch(action.type) {
      case RENDER_ROUTE:
        return action.payload.routeName;
    }

    return state;
  },
  isLoading(state = false, action) {
    switch(action.type) {
      case RENDER_LOADING:
        return true;
      case RENDER_ROUTE:
        return false;
    }

    return state;
  },
  entities: entitiesReducer,
};
