import { useCallback, useEffect, useState } from 'react';

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import { filterMovies } from '../../utils/utils';

function SavedMovies({savedMovies, onMovieDelete}) {
  const [foundMovies, setFoundMovies] = useState([]);
  const [renderMovies, setRenderMovies] = useState(savedMovies);
  const [searchName, setSearchName] = useState('');
  const [isShortFilms, setIsShortFilms] = useState(false);
  const [isMoviesNotFound, setIsMoviesNotFound] = useState(false);
  const [searchError, setSearchError] = useState('');

  // Обработка чекбокса короткометражек
  const handleToggleCheckbox = useCallback(
    (isChecked) => {
      setIsShortFilms(isChecked);
      const filter = filterMovies(
        savedMovies,
        searchName,
        isChecked
      );
      setFoundMovies(filter)
      if (filter.length !== 0) {
        setIsMoviesNotFound(false);
      } else {
        setIsMoviesNotFound(true);
      }
    }, [savedMovies, searchName]);

  // Обработка отправки формы поиска
  function handleSearch(text) {
    setSearchName(text);
    if (text === '') {
      setSearchError('Нужно ввести название для поиска');
    } else {
      setSearchError('');
    }
    const filter = filterMovies(savedMovies, text, isShortFilms)
    setFoundMovies(filter);
    if (filter.length !== 0) {
      setIsMoviesNotFound(false);
    } else {
      setIsMoviesNotFound(true);
    }
  };

  // Обновляем отображаемые карточки при изменении сохраненых фильмов
  useEffect(() => {
    const filter = filterMovies(savedMovies, searchName, isShortFilms)
    setFoundMovies(filter);
    if (filter.length !== 0) {
      setIsMoviesNotFound(false);
    } else {
      setIsMoviesNotFound(true);
    }

  }, [savedMovies, searchName, isShortFilms]);


  // Обновляем отображаемые карточки при изменении найденных фильмов
  useEffect(() => {
    if (foundMovies) {
      setRenderMovies(foundMovies);
    }
  }, [foundMovies]);

  return (
    <main className='movies-saved'>
      <SearchForm
        searchName={searchName}
        searchError={searchError}
        isShortFilms={isShortFilms}
        handleToggleCheckbox={handleToggleCheckbox}
        handleSubmit={handleSearch}
      />
      <MoviesCardList
        movies={renderMovies}
        savedMovies={savedMovies}
        isMoviesNotFound={isMoviesNotFound}
        onMovieDelete={onMovieDelete}
      />
    </main>
  );
}

export default SavedMovies;
