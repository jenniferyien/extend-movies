import queryString from 'query-string'
import { API_KEY, LANGUAGE_DEFAULT } from '../constants'
import {fetchMovieDetailPending, fetchMovieDetailSuccess, fetchMovieDetailError} from '../actions/movieDetailActions';

function fetchMovieDetail(movieId) {
  let params = {
    api_key: API_KEY,
    language: LANGUAGE_DEFAULT
  }
  return dispatch => {
      dispatch(fetchMovieDetailPending());
      fetch(`https://api.themoviedb.org/3/movie/${movieId}?${queryString.stringify(params)}`)
      .then(res => res.json())
      .then(res => {
          if(res.error) {
              throw(res.error);
          }
          dispatch(fetchMovieDetailSuccess(res));
          return res;
      })
      .catch(error => {
          dispatch(fetchMovieDetailError(error));
      })
  }
}

export default fetchMovieDetail;
