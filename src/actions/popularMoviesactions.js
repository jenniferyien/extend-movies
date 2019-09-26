export const FETCH_POPULAR_MOVIES_PENDING = 'FETCH_POPULAR_MOVIES_PENDING';
export const FETCH_POPULAR_MOVIES_SUCCESS = 'FETCH_POPULAR_MOVIES_SUCCESS';
export const FETCH_POPULAR_MOVIES_ERROR = 'FETCH_POPULAR_MOVIES_ERROR';

export function fetchPopularMoviesPending() {
    return {
        type: FETCH_POPULAR_MOVIES_PENDING
    }
}

export function fetchPopularMoviesSuccess(movies) {

    return {
        type: FETCH_POPULAR_MOVIES_SUCCESS,
        movies: movies
    }
}

export function fetchPopularMoviesError(error) {
    return {
        type: FETCH_POPULAR_MOVIES_ERROR,
        error: error
    }
}
