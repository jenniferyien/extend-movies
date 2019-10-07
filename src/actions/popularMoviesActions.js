export const FETCH_POPULAR_MOVIES_PENDING = 'FETCH_POPULAR_MOVIES_PENDING';
export const FETCH_POPULAR_MOVIES_SUCCESS = 'FETCH_POPULAR_MOVIES_SUCCESS';
export const FETCH_POPULAR_MOVIES_ERROR = 'FETCH_POPULAR_MOVIES_ERROR';
export const SORT_MOVIES = "SORT_MOVIES";

export function fetchPopularMoviesPending() {
    return {
        type: FETCH_POPULAR_MOVIES_PENDING
    }
}

export function fetchPopularMoviesSuccess(movies, year) {
    return {
        type: FETCH_POPULAR_MOVIES_SUCCESS,
        movies: movies,
        year: year
    }
}

export function fetchPopularMoviesError(error) {
    return {
        type: FETCH_POPULAR_MOVIES_ERROR,
        error: error
    }
}

export function sortedMovies(movies, sort) {
  return {
    type: SORT_MOVIES,
    movies: movies,
    sort_by: sort
  }
}
