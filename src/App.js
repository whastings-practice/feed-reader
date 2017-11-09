import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';
import './App.css';

import Page from './components/Page';

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
  feeds: createContainerLoadable('Feeds'),
};

class App extends Component {
  render() {
    const { currentRoute, isLoading } = this.props;
    const Container = containers[currentRoute];

    return (
      <Page>
        <Container isLoading={isLoading} />
      </Page>
    );
  }
}

export default connect(
  (state) => ({
    currentRoute: state.currentRoute,
    isLoading: state.isLoading,
  }),
)(App);
