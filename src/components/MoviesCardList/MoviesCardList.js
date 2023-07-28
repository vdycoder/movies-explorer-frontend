import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies, savedOnly }) {
  return (
    <section className='card-list'>
      <ul className='card-list__wrapper'>
        {movies.map((movie) => (
          <li className='card-list__item'>
            <MoviesCard
              key={movie._id}
              movie={movie}
              savedOnly={savedOnly}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
