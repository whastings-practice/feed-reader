import React, { Component } from 'react';
import Link from 'redux-first-router-link';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import FeedsContainer from './containers/feeds/container';
import FeedContainer from './containers/feed/container';
import HomeContainer from './containers/home/container';

const containers = {
  home: HomeContainer,
  feed: FeedContainer,
  feeds: FeedsContainer,
};

class App extends Component {
  render() {
    const Container = containers[this.props.routeName];
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
            <li><Link to="/feed">Feed</Link></li>
          </ul>
        </nav>
        <Container />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    routeName: state.currentRoute,
  }),
)(App);
