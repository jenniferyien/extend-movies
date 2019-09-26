import {fetchPopularMoviesPending, fetchPopularMoviesSuccess, fetchPopularMoviesError} from '../actions/popularMoviesactions';
import queryString from 'query-string'

const API_KEY = 'aa0ea741dcbdabdf6fd9953b60e629cf'

function fetchPopularMovies(year, sort) {
  let params = {
    api_key: API_KEY,
    language: 'en-US',
    sort_by: 'popularity.desc',
    primary_release_year: ''
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
            dispatch(fetchPopularMoviesSuccess(top10));
            return top10;
        })
        .catch(error => {
            dispatch(fetchPopularMoviesError(error));
        })
    }
}

export default fetchPopularMovies;
