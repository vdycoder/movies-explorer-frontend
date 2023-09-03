import { useLocation } from 'react-router-dom';

import './CardButton.css';

function CardButton({
  isLiked,
  onMovieSave,
  onMovieDelete
}) {
  const location = useLocation();

  return (
    <>
    {location.pathname === '/saved-movies' ? (
      <button
        type="button"
        className='btn movie-card__btn movie-card__btn-delete'
        onClick={onMovieDelete}
      ></button>
    ) : (
      <button
        type="button"
        className={`
          btn movie-card__btn movie-card__btn-like
          ${isLiked ? 'movie-card__btn-like_active' : ''}
        `}
        onClick={isLiked ? onMovieDelete : onMovieSave}
      ></button>
    )}
    </>
  );
}

export default CardButton;
