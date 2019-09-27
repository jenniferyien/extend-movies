import React, { Component } from 'react';
import '../styles/ErrorInfo.scss'

class ErrorInfo extends Component {
  render() {
    return (
      <div className='error' style={{backgroundImage: `url(/source.gif)`}}>
        Error: {this.props.content.message}
      </div>
    )
  }
}

export default ErrorInfo;
