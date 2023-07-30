import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({ movies, savedOnly }) {
  const isEmpty = Object.keys(movies).length === 0;
  return (
    <section className='card-list'>
      <ul className='card-list__wrapper'>
        {!isEmpty ? (
          movies.map((movie) => (
            <li className='card-list__item'>
              <MoviesCard
                key={movie._id}
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
