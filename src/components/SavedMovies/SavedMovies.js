import { useEffect, useState } from 'react';

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import { filterMovies } from '../../utils/utils';

function SavedMovies({savedMovies, onMovieDelete}) {
  const savedSearchName =
    localStorage.getItem('searchSavedName') ?? '';
  const savedStateCheckbox =
    JSON.parse(localStorage.getItem('stateSavedCheckbox')) ?? false;

  const [foundMovies, setFoundMovies] = useState([]);
  const [renderMovies, setRenderMovies] = useState(foundMovies ?? []);
  const [searchName, setSearchName] = useState(savedSearchName);

  const [isShortFilms, setIsShortFilms] = useState(savedStateCheckbox);
  const [isMoviesNotFound, setIsMoviesNotFound] = useState(false);
  const [searchError, setSearchError] = useState('');

  // Обработка чекбокса короткометражек
  function handleToggleCheckbox() {
    setIsShortFilms(!isShortFilms);
  };

  // Обработка отправки формы поиска
  function handleSearch(e) {
    e.preventDefault();
    if (searchName === '') {
      setSearchError('Нужно ввести название для поиска');
    } else {
      setSearchError('');
      const filter = filterMovies(savedMovies, searchName, isShortFilms)
      setFoundMovies(filter);
      if (filter.length !== 0) {
        setIsMoviesNotFound(false);
      } else {
        setIsMoviesNotFound(true);
      }
    }
  };

  // Сохраняем данные запроса, чекбокса, показываемых фильмов в LocalStorage
  useEffect(() => {
    localStorage.setItem('searchSavedName', searchName);
    localStorage.setItem('stateSavedCheckbox', JSON.stringify(isShortFilms));
  }, [isShortFilms, foundMovies, searchName]);

  // Обновляем отображаемые карточки при изменении сохраненых фильмов
  useEffect(() => {
    setFoundMovies(savedMovies);
  }, [savedMovies]);

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
        setSearchName={setSearchName}
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
