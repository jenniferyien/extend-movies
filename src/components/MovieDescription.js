import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

import '../styles/MovieDescription.scss'

class MovieDescription extends Component {
  render() {
    const { movie } = this.props
    return (
      <Col className='movie-description' lg={8} md={12} sm={12}>
        <div>
          <h2>{movie.title}</h2>
          <div className='ratings'>
            <i class="fa fa-star" aria-hidden="true"/>
            <p>
              {movie.vote_average}
              <span>/10</span>
            </p>
          </div>
          <p>{movie.overview}</p>
        </div>
      </Col>
    )
  }
}

export default MovieDescription;
