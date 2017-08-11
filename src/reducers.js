import entitiesReducer from './entities/reducer';

import { SHOW_ROUTE, SWITCH_ROUTE } from './actions';

export default {
  currentRoute(state = 'home', action) {
    switch(action.type) {
      case SWITCH_ROUTE:
        return action.payload.routeName;
    }

    return state;
  },
  isLoading(state = false, action) {
    switch(action.type) {
      case SWITCH_ROUTE:
        return true;
      case SHOW_ROUTE:
        return false;
    }

    return state;
  },
  entities: entitiesReducer,
};
