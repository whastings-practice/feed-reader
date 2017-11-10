export const BOOT_APP = 'BOOT_APP';
export const ROUTE_FEED = 'ROUTE_FEED';
export const ROUTE_HOME = 'ROUTE_HOME';
export const SHOW_APP = 'SHOW_APP';
export const SHOW_ROUTE = 'SHOW_ROUTE';
export const SWITCH_ROUTE = 'SWITCH_ROUTE';

export function showApp() {
  return { type: SHOW_APP };
}

export function showRoute() {
  return { type: SHOW_ROUTE };
}

export function switchRoute(routeName) {
  return {
    type: SWITCH_ROUTE,
    payload: { routeName },
  };
}
