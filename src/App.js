import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';

import Page from './components/Page/Page';

function loadContainer(name) {
  return import(`./containers/${name}/${name}Container`);
}

function LoadingScreen() {
  return (
    <p>Loading...</p>
  );
}

function createContainerLoadable(name) {
  return Loadable({
    loader: () => loadContainer(name),
    loading: LoadingScreen,
    render(module, props) {
      const Container = module.default;
      return props.isLoading ? <LoadingScreen /> : <Container />;
    }
  });
}

const containers = {
  home: createContainerLoadable('Home'),
  feed: createContainerLoadable('Feed'),
};

class App extends Component {
  render() {
    const { currentRoute, isAppBooting, isRouteLoading } = this.props;
    const Container = containers[currentRoute];

    return (
      <Page>
        <Container isLoading={isAppBooting || isRouteLoading} />
      </Page>
    );
  }
}

export default connect(
  (state) => ({
    currentRoute: state.currentRoute,
    isAppBooting: state.isAppBooting,
    isRouteLoading: state.isRouteLoading,
  }),
)(App);
