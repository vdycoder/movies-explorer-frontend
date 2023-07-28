import { useState } from 'react';

import './CardButton.css';

function CardButton(props) {
  const [ isSaved, setIsSaved ] = useState(props.isSaved);
  const savedOnly = props.savedOnly;
  const handleLikeClick = () => {
    setIsSaved(!isSaved)
  }
  const handleDeleteClick = () => {
  }

  return (
    <>
    {savedOnly ? (
      <button
        type="button"
        className='movie-card__btn movie-card__btn-delete'
        onClick={handleDeleteClick}
      ></button>
    ) : (
      <button
        type="button"
        className={`
          movie-card__btn movie-card__btn-like
          ${isSaved ? 'movie-card__btn-like_active' : ''}
        `}
        onClick={handleLikeClick}
      ></button>
    )}
    </>
  );
}

export default CardButton;
