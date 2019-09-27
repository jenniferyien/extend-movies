import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

import { IMAGE_URL_BASE } from '../constants'
import PlayIcon from './PlayIcon'

import '../styles/MoviePosterDisplay.scss'

class MoviePosterDisplay extends Component {
  constructor(props) {
      super(props);
      this.getSingleVideo = this.getSingleVideo.bind(this);
  }

  getSingleVideo() {
    const { videos } = this.props
    return videos.results[0]
  }

  render() {
    const { image, videos } = this.props
    let video;
    if (videos) {
      video = this.getSingleVideo()
    }
    return (
      <Col lg={4} md={12} sm={12} className='poster'>
        <div className="poster-display" style={{backgroundImage: `url(${IMAGE_URL_BASE}${image})`}}>
          { video &&
            <PlayIcon videoKey={video.key} />
          }
        </div>
      </Col>
    )
  }
}

export default MoviePosterDisplay;
