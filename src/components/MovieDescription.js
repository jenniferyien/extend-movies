import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

import '../styles/MovieDescription.scss'

class MovieDescription extends Component {
  render() {
    const { movie } = this.props
    return (
      <Col className='movie-description' lg={9}>
        <div>
          <h2>{movie.title}</h2>
          <h5>{movie.vote_average}</h5>
          <p>{movie.overview}</p>
        </div>
      </Col>
    )
  }
}

export default MovieDescription;
