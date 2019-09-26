import PropTypes from "prop-types";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LoadingSpinner from './LoadingSpinner'
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
    if(!this.shouldComponentRender()) return <LoadingSpinner />

    return (
      <div>
        <h2>MovieDetail {movie.title}</h2>
        <hr />
        <PopularMoviesList />
      </div>
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
