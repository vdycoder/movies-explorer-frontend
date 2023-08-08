import React, { useEffect, useState } from 'react';

import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesMoreBtn from '../MoviesMoreBtn/MoviesMoreBtn';
import { dummyMovies } from '../../utils/constants';

function Movies(props) {
  const [ movies, setMovies ] = useState({});
  useEffect(() => {
    setTimeout(() => {
      setMovies(dummyMovies)
    }, 1000)
  }, [])

  return (
    <main className='movies'>
      <SearchForm />
      <MoviesCardList
        movies={movies}
        savedOnly={false}
      />
      <MoviesMoreBtn hasMoreMovies={true} />
    </main>
  );
}

export default Movies;
