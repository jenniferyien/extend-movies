import React, { Component } from 'react';
import { VIDEO_URL_BASE } from '../constants'
import 'font-awesome/css/font-awesome.min.css';
import '../styles/PlayIcon.scss'

class PlayIcon extends Component {
  render() {
    return (
      <a className='play-icon' href={`${VIDEO_URL_BASE}${this.props.videoKey}`} rel="noopener noreferrer" target='_blank'>
        <i className="fa fa-play-circle"></i>
      </a>
    )
  }
}

export default PlayIcon;
