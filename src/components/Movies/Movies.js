import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesMoreBtn from "../MoviesMoreBtn/MoviesMoreBtn";

function Movies(props) {
  return (
    <main className='movies'>
      <SearchForm />
      <MoviesCardList />
      <MoviesMoreBtn />
    </main>
  );
}

export default Movies;
