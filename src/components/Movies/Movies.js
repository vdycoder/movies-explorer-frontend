import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesMoreBtn from "../MoviesMoreBtn/MoviesMoreBtn";
import { dummyMovies } from '../../utils/constants';

function Movies(props) {
  return (
    <main className='movies'>
      <SearchForm />
      <MoviesCardList movies={dummyMovies} savedOnly={false} />
      <MoviesMoreBtn hasMoreMovies={true} />
    </main>
  );
}

export default Movies;
