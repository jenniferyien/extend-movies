import React, { Component } from 'react';
import './App.css';
import fetchPopularMoviesAction from '../dispatch/fetchPopularMovies';
import {getPopularMoviesError, getPopularMovies, getPopularMoviesPending} from '../reducer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoadingSpinner from './LoadingSpinner'
import PopularMoviesList from './PopularMoviesList'

class App extends Component {
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
    const {movies, error, pending} = this.props;
    if(!this.shouldComponentRender()) return <LoadingSpinner />
    console.log(movies)
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
              <LoadingSpinner />
            </li>
            <li>
              <Link to="/popular_movies">Topics</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={PopularMoviesList} />
          <Route path="/detail" component={Home} />
        </div>
      </Router>
    )
  }
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
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
)(App);
