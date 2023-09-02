import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { checkLikeStatus } from '../../utils/utils'

function MoviesCardList({
  movies,
  savedMovies,
  isMoviesNotFound,
  isServerError,
  onMovieSave,
  onMovieDelete
}) {
  return (
    <section className='card-list' aria-label='Список карточек фильмов'>
      {isMoviesNotFound && (
        <p className='card-list__info'>Ничего не найдено</p>
      )}
      {isServerError && (
        <p className='card-list__info'>
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз.
        </p>
      )}
      <ul className='card-list__wrapper'>
        {!isMoviesNotFound && (
          movies.map((movie) => (
            <li key={movie.id || movie._id} className='card-list__item'>
              <MoviesCard
                movie={movie}
                isLiked={checkLikeStatus(savedMovies, movie)}
                onMovieSave={onMovieSave}
                onMovieDelete={onMovieDelete}
              />
            </li>
          ))
        )}
      </ul>
    </section>
  );
}

export default MoviesCardList;
