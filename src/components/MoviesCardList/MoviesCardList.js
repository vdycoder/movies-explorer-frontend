import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({ movies, savedOnly }) {
  const isEmpty = Object.keys(movies).length === 0;
  return (
    <section className='card-list' aria-label='Список карточек фильмов'>
      <ul className='card-list__wrapper'>
        {!isEmpty ? (
          movies.map((movie, i) => (
            <li key={i} className='card-list__item'>
              <MoviesCard
                movie={movie}
                savedOnly={savedOnly}
              />
            </li>
        ))
        ) : (
          <Preloader />
        )}
      </ul>
    </section>
  );
}

export default MoviesCardList;
