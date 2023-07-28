import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { dummyMovies } from '../../utils/constants';

function MoviesCardList(props) {
  return (
    <section className='card-list'>
      <ul className='card-list__wrapper'>
        {dummyMovies.map((movie) => (
          <li className='card-list__item'>
            <MoviesCard
              key={movie._id}
              movie={movie}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
