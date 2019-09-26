import {FETCH_POPULAR_MOVIES_PENDING, FETCH_POPULAR_MOVIES_SUCCESS, FETCH_POPULAR_MOVIES_ERROR} from './actions/popularMoviesactions';

const initialState = {
    movieList: {
      pending: false,
      movies: [],
      error: null
    }
}

export const getPopularMovies = state => state.movieList.movies;
export const getPopularMoviesPending = state => state.movieList.pending;
export const getPopularMoviesError = state => state.movieList.error;

export function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_POPULAR_MOVIES_PENDING:
            return {
                ...state,
                movieList: {
                  ...state.movieList,
                  pending: true
                }
            }
        case FETCH_POPULAR_MOVIES_SUCCESS:
            return {
                ...state,
                movieList: {
                  ...state.movieList,
                  pending: false,
                  movies: action.movies
                }

            }
        case FETCH_POPULAR_MOVIES_ERROR:
            return {
                ...state,
                movieList: {
                  ...state.movieList,
                  pending: false,
                  error: {
                    message: action.status_message,
                    code: action.status_code
                  }
                }
            }
        default:
            return state;
    }
}
