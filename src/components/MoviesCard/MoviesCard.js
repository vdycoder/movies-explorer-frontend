import { useState } from 'react';
import './MoviesCard.css';

function MoviesCard({ movie }) {
  const [ isSaved, setIsSaved ] = useState(movie.isSaved);
  const handleLikeClick = () => {
    setIsSaved(!isSaved)
  }
  return (
    <article className='movie-card'>
      <img
        className='movie-card__image'
        src={movie.image.url}
        alt={movie.nameRU}
      />
      <div className="movie-card__caption-wrapper">
        <h2 className="movie-card__caption">{movie.nameRU}</h2>
        <button
          type="button"
          className={`
            movie-card__like-btn
            ${isSaved ? 'movie-card__like-btn_active' : ''}
          `}
          onClick={handleLikeClick}
        ></button>
      </div>
      <p className='movie-card__duration'>1ч 42м</p>
    </article>
  );
}

export default MoviesCard;
