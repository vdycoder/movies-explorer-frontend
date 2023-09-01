import { useCallback, useEffect, useState } from 'react';

import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesMoreBtn from '../MoviesMoreBtn/MoviesMoreBtn';

import beatfilmMoviesApi from '../../utils/MoviesApi';
import {
  WINDOW_SIZE_M,
  WINDOW_SIZE_S,
  NUMBER_OF_CARDS_L,
  NUMBER_OF_CARDS_M,
  NUMBER_OF_CARDS_S,
  MORE_CARDS_S,
  MORE_CARDS_XS
} from '../../utils/constants';
import { filterMovies } from '../../utils/utils';

function Movies({
  savedMovies,
  onMovieSave,
  onMovieDelete,
}) {
  const savedAllMovies =
    JSON.parse(localStorage.getItem('allMovies'));
  const savedFoundMovies =
    JSON.parse(localStorage.getItem('foundMovies'));
  const savedSearchName =
    localStorage.getItem('searchName') ?? '';
  const savedStateCheckbox =
    JSON.parse(localStorage.getItem('stateCheckbox')) ?? false;

  const [allMovies, setAllMovies] = useState(savedAllMovies);
  const [renderMovies, setRenderMovies] = useState([]);

  const [searchName, setSearchName] = useState(savedSearchName);
  const [isShortFilms, setIsShortFilms] = useState(savedStateCheckbox);
  const [foundMovies, setFoundMovies] = useState(savedFoundMovies);

  const [isLoading, setIsLoading] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [isMoviesNotFound, setIsMoviesNotFound] = useState(false);
  const [searchError, setSearchError] = useState('');
  const [isServerError, setIsServerError] = useState(false);

  const [moreCards, setMoreCards] = useState(0);
  const [renderCards, setRenderCards] = useState(null);

  // Обработка чекбокса короткометражек
  function handleToggleCheckbox() {
    setIsShortFilms(!isShortFilms);
  };

  // Колбэк отображения дополнительных карточек
  const handleMoreCards = useCallback(
    () => {
      setRenderCards((prev) => prev + moreCards);
    }, [moreCards]
  );

  // Отслеживаю ширину окна
  function handleWindowResize() {
    setWindowSize(window.innerWidth);
  };

  // Обработка отправки формы поиска
  function handleSearch(e) {
    e.preventDefault();
    if (searchName === '') {
      setSearchError('Нужно ввести название для поиска');
    } else {
      setSearchError('');
      const filter = filterMovies(allMovies, searchName, isShortFilms)
      setFoundMovies(filter);
      if (filter.length !== 0) {
        setIsMoviesNotFound(false);
      } else {
        setIsMoviesNotFound(true);
      }
    }
  };

  // Определяю количество карточек на странице в зависимости от ширины экрана
  useEffect(() => {
    if (windowSize >= WINDOW_SIZE_M) {
      setRenderCards(NUMBER_OF_CARDS_L);
      setMoreCards(MORE_CARDS_S);
    } else if (windowSize < WINDOW_SIZE_M && windowSize > WINDOW_SIZE_S) {
      setRenderCards(NUMBER_OF_CARDS_M);
      setMoreCards(MORE_CARDS_XS);
    } else if (windowSize <= WINDOW_SIZE_S) {
      setRenderCards(NUMBER_OF_CARDS_S);
      setMoreCards(MORE_CARDS_XS);
    }
  }, [windowSize]);

  // Загружаю фильмы из апи, если пусто в LocalStorage:
  useEffect(() => {
    if (!allMovies) {
      setIsLoading(true);
      beatfilmMoviesApi.getAllMovies()
        .then((movies) => {
          localStorage.setItem('allMovies', JSON.stringify(movies));
          setAllMovies(movies);
        })
        .catch((err) => {
          console.error(err);
          setIsServerError(true);
        })
        .finally(() => {
          setIsLoading(false);
        })
    }
  }, [allMovies]);

  // Устанавливаю список карточек к показу на странице
  useEffect(() => {
    if (renderCards && foundMovies) {
      setRenderMovies(foundMovies.slice(0, renderCards));
    }
  }, [renderCards, foundMovies]);

  // Если в поиске пустое значение - показываем все фильмы как найденные
  useEffect(() => {
    if (!searchName) {
      setFoundMovies(allMovies);
    }
  }, [allMovies, searchName]);

  // Сохраняю данные запроса, чекбокса, показываемых фильмов в LocalStorage
  useEffect(() => {
    if (foundMovies !== null) {
      localStorage.setItem('foundMovies', JSON.stringify(foundMovies));
    }
    localStorage.setItem('searchName', searchName);
    localStorage.setItem('stateCheckbox', JSON.stringify(isShortFilms));
  }, [searchName, isShortFilms, foundMovies]);

  // Устанавливаю/снимаю слушатель на изменение размера окна
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [windowSize]);

  return (
    <main className='movies'>
      <SearchForm
        searchName={searchName}
        setSearchName={setSearchName}
        searchError={searchError}
        isShortFilms={isShortFilms}
        handleToggleCheckbox={handleToggleCheckbox}
        handleSubmit={handleSearch}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <MoviesCardList
            movies={renderMovies}
            savedMovies={savedMovies}
            isMoviesNotFound={isMoviesNotFound}
            isServerError={isServerError}
            onMovieSave={onMovieSave}
            onMovieDelete={onMovieDelete}
          />
          {foundMovies && renderCards < foundMovies.length && (
            <MoviesMoreBtn onClick={handleMoreCards} />
          )}
        </>
      )}
    </main>
  );
}

export default Movies;
