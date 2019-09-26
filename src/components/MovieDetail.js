import React, { Component } from 'react';
import PopularMoviesList from './PopularMoviesList'
import LoadingSpinner from './LoadingSpinner'
import {getPopularMoviesError, getPopularMovies, getPopularMoviesPending} from '../reducer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchMovieDetailAction from '../dispatch/fetchMovieDetail';

class MovieDetail extends Component {
  constructor(props) {
      super(props);
      this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentWillMount() {
      const {fetchPopularMovies} = this.props;
      // fetchPopularMovies();
  }

  shouldComponentRender() {
      const {pending} = this.props;
      if(this.pending === false) return false;
      return true;
  }

  render() {
    const {movie, error, pending} = this.props;
    if(!this.shouldComponentRender()) return <LoadingSpinner />

    return (
      <div>
        <h2>MovieDetail {this.props.match.params.id}</h2>
        <hr />
        <PopularMoviesList />
      </div>
    )
  }
}

const mapStateToProps = state => ({
    error: getPopularMoviesError(state),
    movies: getPopularMovies(state),
    pending: getPopularMoviesPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchMovieDetail: fetchMovieDetailAction
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieDetail);
