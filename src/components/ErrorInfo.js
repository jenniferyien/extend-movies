import React, { Component } from 'react';

class ErrorInfo extends Component {
  render() {
    return (
      <div>Error {this.props.content}</div>
    )
  }
}

export default ErrorInfo;
