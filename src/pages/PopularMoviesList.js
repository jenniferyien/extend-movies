import PropTypes from "prop-types";
import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DropdownSelector from '../components/DropdownSelector'
import ErrorInfo from '../components/ErrorInfo'
import LoadingSpinner from '../components/LoadingSpinner'
import MovieDisplay from '../components/MovieDisplay'

import { All_YEARS, SORT_BY } from '../constants'
import fetchPopularMoviesAction from '../dispatch/fetchPopularMovies';
import sortMoviesAction from '../dispatch/sortMovies'
import {
  getPopularMoviesError,
  getPopularMovies,
  getPopularMoviesPending,
  getPopularMoviesYear,
  getPopularMoviesSort
} from '../reducer';
import '../styles/PopularMoviesList.scss'

class PopularMoviesList extends Component {
  static propTypes = {
    fetchPopularMovies: PropTypes.func.isRequired,
    sortMovies: PropTypes.func.isRequired,
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
      const {fetchPopularMovies, year, sort_by} = this.props;
      fetchPopularMovies(year, sort_by);
  }

  shouldComponentRender() {
      const {pending} = this.props;
      if(pending === 'false') return false;
      return true;
  }

  handleSelectedChange(type, value) {
    let {fetchPopularMovies, movies, sort_by, sortMovies} = this.props;
    if (type === 'year') {
      fetchPopularMovies(value, sort_by);
    } else if (type === 'sort') {
      sortMovies(movies, value)
    }
  }

  render() {
    const {movies, error, year, sort_by} = this.props;
    if(error) return <ErrorInfo content={error} />
    if(!this.shouldComponentRender()) return <LoadingSpinner />

    return (
      <Container>
        <Row>
          <Col className='display-list' lg={9}>
            <Row>
              {movies.map((movie) => {
                return (
                  <MovieDisplay key={movie.id} movie={movie}/>
                )
              })}
            </Row>
          </Col>
          <Col lg={3}>
            <DropdownSelector handleSelectedChange={this.handleSelectedChange} value={year} type='year' options={All_YEARS} />
            <DropdownSelector handleSelectedChange={this.handleSelectedChange} value={sort_by} type='sort' options={SORT_BY}/>
          </Col>
        </Row>
      </Container>
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
    fetchPopularMovies: fetchPopularMoviesAction,
    sortMovies: sortMoviesAction
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PopularMoviesList);
