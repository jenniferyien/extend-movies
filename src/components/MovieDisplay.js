import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { IMAGE_URL_BASE } from '../constants'

import '../styles/MovieDisplay.scss'

class MovieDisplay extends Component {
  render() {
    const { movie } = this.props
    return (
      <Col className='movie-display' lg={4} md={6} sm={6} xs={6}>
        <Link to={`/movie/${movie.id}`}>
          <div className='display' style={{backgroundImage: `url(${IMAGE_URL_BASE}${movie.poster_path})`}}>
            <div className='text-display'>
              <p className='movie-title'>{movie.title}</p>
            </div>
          </div>
        </Link>
      </Col>
    )
  }
}

export default MovieDisplay;
