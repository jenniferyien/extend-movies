import { sortedMovies } from '../actions/popularMoviesActions';

export function sorting(movies, sort) {
  let sorted_movies = movies
  if (sort === 'desc') {
    sorted_movies = movies.sort(function(a, b){return b.popularity-a.popularity})
  } else if (sort === 'asc') {
    sorted_movies = movies.sort(function(a, b){return a.popularity-b.popularity})
  }
  return sorted_movies
}

function sortMovies(movies, sort) {
  let sorted = sorting(movies, sort)
  return dispatch => {
    dispatch(sortedMovies(sorted, sort));
    return movies
  }
}

export default sortMovies;
