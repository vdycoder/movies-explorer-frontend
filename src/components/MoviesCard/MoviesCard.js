import { useLocation } from 'react-router-dom';

import './MoviesCard.css';
import CardButton from '../CardButton/CardButton';
import { getFormattedDuration } from '../../utils/utils';
import { MOVIES_API_URL } from '../../utils/constants';

function MoviesCard({
  movie,
  isLiked,
  onMovieSave,
  onMovieDelete
}) {
  const location = useLocation();

  function handleMovieSave() {
    onMovieSave(movie);
  };

  function handleMovieDelete() {
    onMovieDelete(movie);
  };

  return (
    <article className='movie-card'>
      <a
        className='link movie-card__link'
        href={movie.trailerLink}
        target='_blank'
        rel='noreferrer'
      >
        <img
          className='movie-card__image'
          src={
            location.pathname === '/movies'
              ? (MOVIES_API_URL + movie.image.url)
              : (movie.image)
          }
          alt={movie.nameRU}
        />
      </a>
      <div className='movie-card__caption-wrapper'>
        <h2 className='movie-card__caption'>{movie.nameRU}</h2>
        <CardButton
          isLiked={isLiked}
          onMovieSave={handleMovieSave}
          onMovieDelete={handleMovieDelete}
        />
      </div>
      <p className='movie-card__duration'>
        {getFormattedDuration(movie.duration)}
      </p>
    </article>
  );
}

export default MoviesCard;
