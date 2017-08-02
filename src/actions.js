export const RENDER_LOADING = 'RENDER_LOADING';
export const RENDER_ROUTE = 'RENDER_ROUTE';
export const ROUTE_FEED = 'ROUTE_FEED';
export const ROUTE_FEEDS = 'ROUTE_FEEDS';
export const ROUTE_HOME = 'ROUTE_HOME';

export function renderLoading() {
  return { type: RENDER_LOADING };
}

export function renderRoute(routeName) {
  return {
    type: RENDER_ROUTE,
    payload: { routeName },
  };
}
