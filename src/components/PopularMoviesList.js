import PropTypes from "prop-types";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import DropdownSelector from './DropdownSelector'
import LoadingSpinner from './LoadingSpinner'

import { All_YEARS, SORT_BY } from '../constants'
import fetchPopularMoviesAction from '../dispatch/fetchPopularMovies';
import {
  getPopularMoviesError,
  getPopularMovies,
  getPopularMoviesPending,
  getPopularMoviesYear,
  getPopularMoviesSort
} from '../reducer';


class PopularMoviesList extends Component {
  static propTypes = {
    fetchPopularMovies: PropTypes.func.isRequired,
    pending: PropTypes.bool.isRequired,
    movies: PropTypes.array.isRequired,
    error: PropTypes.object
  }

  constructor(props) {
      super(props);
      this.shouldComponentRender = this.shouldComponentRender.bind(this);
      this.handleSelectedChange = this.handleSelectedChange.bind(this);
  }

  componentWillMount() {
      const {fetchPopularMovies} = this.props;
      fetchPopularMovies();
  }

  shouldComponentRender() {
      const {pending} = this.props;
      if(pending === 'false') return false;
      return true;
  }

  handleSelectedChange(type, value) {
    console.log(this.props)
    console.log(type, value)
    const {fetchPopularMovies} = this.props;
    // fetchPopularMovies(value, 'asc');
  }
  render() {
    const {movies, error, year, sort_by} = this.props;
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
      <DropdownSelector handleSelectedChange={this.handleSelectedChange} value={year} type='year' options={All_YEARS} />
      <DropdownSelector handleSelectedChange={this.handleSelectedChange} value={sort_by} type='sort' options={SORT_BY}/>

      </div>
    )
  }
}

const mapStateToProps = state => ({
    error: getPopularMoviesError(state),
    movies: getPopularMovies(state),
    pending: getPopularMoviesPending(state),
    year: getPopularMoviesYear(state),
    sort_by: getPopularMoviesSort(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchPopularMovies: fetchPopularMoviesAction
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PopularMoviesList);
