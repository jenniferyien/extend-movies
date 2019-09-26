export const FETCH_MOVIE_DETAIL_PENDING = 'FETCH_MOVIE_DETAIL_PENDING';
export const FETCH_MOVIE_DETAIL_SUCCESS = 'FETCH_MOVIE_DETAIL_SUCCESS';
export const FETCH_MOVIE_DETAIL_ERROR = 'FETCH_MOVIE_DETAIL_ERROR';

export function fetchMovieDetailPending() {
    return {
        type: FETCH_MOVIE_DETAIL_PENDING
    }
}

export function fetchMovieDetailSuccess(movie) {

    return {
        type: FETCH_MOVIE_DETAIL_SUCCESS,
        movie: movie
    }
}

export function fetchMovieDetailError(error) {
    return {
        type: FETCH_MOVIE_DETAIL_ERROR,
        error: error
    }
}
