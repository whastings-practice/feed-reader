import React, { Component } from 'react';
import Link from 'redux-first-router-link';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

function loadContainer(name) {
  return import(`./containers/${name}/container`);
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
  home: createContainerLoadable('home'),
  feed: createContainerLoadable('feed'),
  feeds: createContainerLoadable('feeds'),
};

class App extends Component {
  render() {
    const { currentRoute, isLoading } = this.props;
    const Container = containers[currentRoute];

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/feeds">Feeds</Link></li>
          </ul>
        </nav>
        <Container isLoading={isLoading} />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    currentRoute: state.currentRoute,
    isLoading: state.isLoading,
  }),
)(App);
