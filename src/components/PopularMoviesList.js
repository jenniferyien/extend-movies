import React, { Component } from 'react';
import './App.css';
import fetchPopularMoviesAction from '../dispatch/fetchPopularMovies';
import {getPopularMoviesError, getPopularMovies, getPopularMoviesPending} from '../reducer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoadingSpinner from './LoadingSpinner'
import { Link } from "react-router-dom";


class PopularMoviesList extends Component {
  constructor(props) {
      super(props);
      this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentWillMount() {
      const {fetchPopularMovies} = this.props;
      fetchPopularMovies();
  }

  shouldComponentRender() {
      const {pending} = this.props;
      if(this.pending === false) return false;
      return true;
  }
  render() {
    console.log(this.props)
    const {movies, error, pending} = this.props;
    if(!this.shouldComponentRender()) return <LoadingSpinner />

    return (
      <div>
      <h2>Popular Movies List</h2>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </li>
        )
      })}
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
    fetchPopularMovies: fetchPopularMoviesAction
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PopularMoviesList);
