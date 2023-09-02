import { useCallback, useEffect, useState } from 'react';

import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesMoreBtn from '../MoviesMoreBtn/MoviesMoreBtn';

import beatfilmMoviesApi from '../../utils/MoviesApi';
import {
  WINDOW_SIZE_XL,
  WINDOW_SIZE_L,
  WINDOW_SIZE_M,
  NUMBER_OF_CARDS_XL,
  NUMBER_OF_CARDS_L,
  NUMBER_OF_CARDS_M,
  NUMBER_OF_CARDS_S,
  MORE_CARDS_L,
  MORE_CARDS_M,
  MORE_CARDS_S
} from '../../utils/constants';
import { filterMovies } from '../../utils/utils';

function Movies({
  savedMovies,
  onMovieSave,
  onMovieDelete,
}) {
  const savedFoundMovies =
    JSON.parse(localStorage.getItem('foundMovies'));
  const savedSearchName =
    localStorage.getItem('searchName') ?? '';
  const savedStateCheckbox =
    JSON.parse(localStorage.getItem('stateCheckbox')) ?? false;

  const [allMovies, setAllMovies] = useState(null);
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
  const handleToggleCheckbox = useCallback(
    (isChecked) => {
      setIsShortFilms(isChecked);
      if (searchName) {
        const filter = filterMovies(
          allMovies !== null ? allMovies : foundMovies,
          searchName,
          isChecked
        );
        setFoundMovies(filter)
        if (filter.length !== 0) {
          setIsMoviesNotFound(false);
        } else {
          setIsMoviesNotFound(true);
        }
      } else {
        setSearchError('Нужно ввести название для поиска');
      }
    }, [allMovies, foundMovies, searchName]);

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
  function handleSearch(text) {
    //e.preventDefault();
    setSearchName(text);
    if (text === '') {
      setSearchError('Нужно ввести название для поиска');
    } else {
      setSearchError('');
      if (allMovies === null) {
        setIsLoading(true);
        beatfilmMoviesApi.getAllMovies()
          .then((movies) => {
            //localStorage.setItem('allMovies', JSON.stringify(movies));
            setAllMovies(movies);
            const filter = filterMovies(movies, text, isShortFilms)
            setFoundMovies(filter);
            if (filter.length !== 0) {
              setIsMoviesNotFound(false);
            } else {
              setIsMoviesNotFound(true);
            }
          })
          .catch((err) => {
            console.error(err);
            setIsServerError(true);
          })
          .finally(() => {
            setIsLoading(false);
          })
      } else {
        const filter = filterMovies(allMovies, text, isShortFilms)
        setFoundMovies(filter);
        if (filter.length !== 0) {
          setIsMoviesNotFound(false);
        } else {
          setIsMoviesNotFound(true);
        }
      }
    }
  };

  // Определяю количество карточек на странице в зависимости от ширины экрана
  useEffect(() => {
    if (windowSize >= WINDOW_SIZE_XL) {
      setRenderCards(NUMBER_OF_CARDS_XL);
      setMoreCards(MORE_CARDS_L);
    } else if (windowSize < WINDOW_SIZE_XL && windowSize > WINDOW_SIZE_L) {
      setRenderCards(NUMBER_OF_CARDS_L);
      setMoreCards(MORE_CARDS_M);
    } else if (windowSize < WINDOW_SIZE_L && windowSize > WINDOW_SIZE_M) {
      setRenderCards(NUMBER_OF_CARDS_M);
      setMoreCards(MORE_CARDS_S);
    } else if (windowSize <= WINDOW_SIZE_M) {
      setRenderCards(NUMBER_OF_CARDS_S);
      setMoreCards(MORE_CARDS_S);
    }
  }, [windowSize, foundMovies]);

  // Устанавливаю список карточек к показу на странице
  useEffect(() => {
    if (renderCards && foundMovies) {
      setRenderMovies(foundMovies.slice(0, renderCards));
    }
  }, [renderCards, foundMovies]);

  // Сохраняю данные запроса, чекбокса, показываемых фильмов в LocalStorage
  useEffect(() => {
    // if (foundMovies !== null) {
    //   localStorage.setItem('foundMovies', JSON.stringify(foundMovies));
    // }
    localStorage.setItem('foundMovies', JSON.stringify(foundMovies));
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
