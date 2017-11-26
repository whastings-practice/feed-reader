import React from 'react';

export default class Autofocus extends React.Component {
  componentDidMount() {
    this.node.focus();
  }

  setNode = (el) => {
    this.node = el;
  }

  render() {
    return (
      <div ref={this.setNode} tabIndex="-1">
        {this.props.children}
      </div>
    );
  }
}
