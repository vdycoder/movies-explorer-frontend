import './MoviesCard.css';
import CardButton from '../CardButton/CardButton';

function MoviesCard({ movie, savedOnly }) {
  return (
    <article className='movie-card'>
      <img
        className='movie-card__image'
        src={movie.image.url}
        alt={movie.nameRU}
      />
      <div className="movie-card__caption-wrapper">
        <h2 className="movie-card__caption">{movie.nameRU}</h2>
        <CardButton savedOnly={savedOnly} isSaved={movie.isSaved}/>
      </div>
      <p className='movie-card__duration'>1ч 42м</p>
    </article>
  );
}

export default MoviesCard;
