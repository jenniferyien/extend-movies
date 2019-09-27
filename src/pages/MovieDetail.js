import PropTypes from "prop-types";
import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ErrorInfo from '../components/ErrorInfo'
import LoadingSpinner from '../components/LoadingSpinner'
import MovieDescription from '../components/MovieDescription'
import MoviePosterDisplay from '../components/MoviePosterDisplay'
import PopularMoviesList from './PopularMoviesList'

import fetchMovieDetailAction from '../dispatch/fetchMovieDetail';
import {getSelectedMovieError, getSelectedMovie, getSelectedMoviePending} from '../reducer';


class MovieDetail extends Component {
  static propTypes = {
    fetchMovieDetail: PropTypes.func.isRequired,
    pending: PropTypes.bool.isRequired,
    movie: PropTypes.object.isRequired,
    error: PropTypes.object
  };

  constructor(props) {
      super(props);
      this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentWillMount() {
      const {fetchMovieDetail} = this.props;
      fetchMovieDetail(this.props.match.params.id);
  }

  componentDidUpdate(prevProps, prevState) {
    const { match, fetchMovieDetail } = this.props;
    if( match.params.id !== prevProps.match.params.id ) {
      fetchMovieDetail(match.params.id);
   };
  }

  shouldComponentRender() {
      const {pending} = this.props;
      if(pending === 'false') return false;
      return true;
  }

  render() {
    const {movie, error} = this.props;
    if (error) return <ErrorInfo content={error}/>
    if(!this.shouldComponentRender()) return <LoadingSpinner />

    return (
      <Container>
        <Row>
          <MoviePosterDisplay image={movie.poster_path} videos={movie.videos}/>
          <MovieDescription movie={movie} />
        </Row>
        <hr />
        <PopularMoviesList />
      </Container>
    )
  }
}

const mapStateToProps = state => ({
    error: getSelectedMovieError(state),
    movie: getSelectedMovie(state),
    pending: getSelectedMoviePending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchMovieDetail: fetchMovieDetailAction
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieDetail);
