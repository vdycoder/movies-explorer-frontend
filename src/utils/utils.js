import { SHORT_FILM_DURATION } from './constants';

export function checkRoute(array, route) {
    return array.includes(route);
};

export function checkLikeStatus(savedMovies, movie) {
  return savedMovies.find((savedMovie) => {
    return savedMovie.movieId === (movie.id || movie.movieId);
  });
}

export function getFormattedDuration(time) {
  let hours = Math.floor(time / 60);
  let minutes = time % 60;
  if (hours === 0) {
    return `${minutes}м`;
  } else {
    return `${hours}ч ${minutes}м`;
  }
}

export function filterMovies(movies, searchText, isShortMovies) {
  const filteredMovies = movies.filter((movie) => {
    const movieRu = String(movie.nameRU).toLowerCase().trim();
    const movieEn = String(movie.nameEN).toLowerCase().trim();
    const userMovie = searchText.toLowerCase().trim();
    return movieRu.includes(userMovie) || movieEn.includes(userMovie);
  });

  if (isShortMovies) {
    return filteredMovies.filter(
      movie => movie.duration <= SHORT_FILM_DURATION
    );
  } else {
    return filteredMovies;
  }
}
