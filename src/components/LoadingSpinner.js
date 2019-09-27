import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/LoadingSpinner.scss'

class LoadingSpinner extends Component {
  render() {
    return (
      <div className='spinner'>
        <i className="fa fa-spinner fa-spin"></i>
      </div>
    )
  }
}

export default LoadingSpinner;
