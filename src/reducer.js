import {FETCH_POPULAR_MOVIES_PENDING, FETCH_POPULAR_MOVIES_SUCCESS, FETCH_POPULAR_MOVIES_ERROR, SORT_MOVIES} from './actions/popularMoviesActions';
import {FETCH_MOVIE_DETAIL_PENDING, FETCH_MOVIE_DETAIL_SUCCESS, FETCH_MOVIE_DETAIL_ERROR} from './actions/movieDetailActions';

const initialState = {
    movieList: {
      pending: false,
      movies: [],
      error: null,
      year: '',
      sort_by: 'desc'
    },
    selectedMovie: {
      pending: false,
      movie: {},
      error: null
    }
}

export const getSelectedMovie = state => state.selectedMovie.movie;
export const getSelectedMovieError = state => state.selectedMovie.error;
export const getSelectedMoviePending = state => state.selectedMovie.pending;
export const getPopularMovies = state => state.movieList.movies;
export const getPopularMoviesError = state => state.movieList.error;
export const getPopularMoviesPending = state => state.movieList.pending;
export const getPopularMoviesSort = state => state.movieList.sort_by;
export const getPopularMoviesYear = state => state.movieList.year;

export function reducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_MOVIE_DETAIL_PENDING:
          return {
              ...state,
              selectedMovie: {
                ...state.selectedMovie,
                pending: true
              }
          }
      case FETCH_MOVIE_DETAIL_SUCCESS:
          return {
              ...state,
              selectedMovie: {
                ...state.selectedMovie,
                pending: false,
                movie: action.movie
              }

          }
      case FETCH_MOVIE_DETAIL_ERROR:
          return {
              ...state,
              selectedMovie: {
                ...state.selectedMovie,
                pending: false,
                error: {
                  message: action.status_message,
                  code: action.status_code
                }
              }
          }
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
                movies: action.movies,
                year: action.year
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
      case SORT_MOVIES:
        return {
            ...state,
            movieList: {
              ...state.movieList,
              pending: false,
              movies: action.movies,
              sort_by: action.sort_by
            }
        }
      default:
          return state;
    }
}
