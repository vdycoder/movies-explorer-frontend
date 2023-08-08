import './SavedMovies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesMoreBtn from "../MoviesMoreBtn/MoviesMoreBtn";
import { dummyMoviesSaved } from '../../utils/constants';

function SavedMovies(props) {
  return (
    <main className='movies-saved'>
      <SearchForm />
      <MoviesCardList movies={dummyMoviesSaved} savedOnly={true}/>
      <MoviesMoreBtn hasMoreMovies={false} />
    </main>
  );
}

export default SavedMovies;
