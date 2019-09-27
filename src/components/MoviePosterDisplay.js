import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
    // videos.results[0]
  }

  render() {
    const { image, videos } = this.props
    if (videos) {
      console.log(videos.results)
    }
    return (
      <Col lg={3}>
        <div className="poster-display" style={{backgroundImage: `url(${IMAGE_URL_BASE}${image})`}}>
          {/* videos &&
            <Link to='/movie/:id'>playlink</Link>
          */}
        </div>
        <PlayIcon />
      </Col>
    )
  }
}

export default MoviePosterDisplay;
