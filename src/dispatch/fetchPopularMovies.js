import queryString from 'query-string'
import { API_KEY, LANGUAGE_DEFAULT, DEFAULT_SORT_BY, INCLUDE_VIDEO } from '../constants'
import {fetchPopularMoviesPending, fetchPopularMoviesSuccess, fetchPopularMoviesError} from '../actions/popularMoviesActions';
import { sorting } from './sortMovies'

function fetchPopularMovies(year = '', sort) {
  if (year === 'All') {
    year = ''
  }
  let params = {
    api_key: API_KEY,
    language: LANGUAGE_DEFAULT,
    sort_by: DEFAULT_SORT_BY,
    primary_release_year: year,
    include_video: INCLUDE_VIDEO
  }
  return dispatch => {
      dispatch(fetchPopularMoviesPending());
      fetch(`https://api.themoviedb.org/3/discover/movie?${queryString.stringify(params)}`)
      .then(res => res.json())
      .then(res => {
          if(res.error) {
              throw(res.error);
          }
          // pass only top 10 results
          let top10 = res.results.slice(0,10)
          let sortTop10 = sorting(top10, sort)
          dispatch(fetchPopularMoviesSuccess(sortTop10, year));
          return top10;
      })
      .catch(error => {
          dispatch(fetchPopularMoviesError(error));
      })
  }
}

export default fetchPopularMovies;
