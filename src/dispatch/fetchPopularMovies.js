import queryString from 'query-string'
import { API_KEY, LANGUAGE_DEFAULT, DEFAULT_DISCOVER, DEFAULT_SORT } from '../constants'
import {fetchPopularMoviesPending, fetchPopularMoviesSuccess, fetchPopularMoviesError} from '../actions/popularMoviesActions';

function fetchPopularMovies(year = '', sort = DEFAULT_SORT) {
  if (year === 'All') {
    year = ''
  }
  let params = {
    api_key: API_KEY,
    language: LANGUAGE_DEFAULT,
    sort_by: `${DEFAULT_DISCOVER}.${sort}`,
    primary_release_year: year
  }
    return dispatch => {
        dispatch(fetchPopularMoviesPending());
        fetch(`https://api.themoviedb.org/3/movie/popular?${queryString.stringify(params)}`)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            // pass only top 10 results
            let top10 = res.results.slice(0,10)
            dispatch(fetchPopularMoviesSuccess(top10, year, sort));
            return top10;
        })
        .catch(error => {
            dispatch(fetchPopularMoviesError(error));
        })
    }
}

export default fetchPopularMovies;
