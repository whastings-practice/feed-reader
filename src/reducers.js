import entitiesReducer from './entities/reducer';

import { BOOT_APP, SHOW_APP, SHOW_ROUTE, SWITCH_ROUTE } from './actions';

export default {
  currentRoute(state = 'home', action) {
    switch(action.type) {
      case SWITCH_ROUTE:
        return action.payload.routeName;
      default:
        return state;
    }
  },
  isAppBooting(state = false, action) {
    switch(action.type) {
      case BOOT_APP:
        return true;
      case SHOW_APP:
        return false;
      default:
        return state;
    }
  },
  isRouteLoading(state = false, action) {
    switch(action.type) {
      case SWITCH_ROUTE:
        return true;
      case SHOW_ROUTE:
        return false;
      default:
        return state;
    }
  },
  entities: entitiesReducer,
};
