export default {
  currentRoute(state = 'home', action) {
    if (action.type.match(/^ROUTE_/)) {
      const routeName = action.type.replace(/^ROUTE_(.+)$/, '$1').toLowerCase();
      return routeName;
    }
    return state;
  }
};
