import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import { headerShowRoutes, footerShowRoutes } from '../../utils/constants';
import { checkRoute } from '../../utils/utils';
import mainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function App() {
  const headerIsVisible = checkRoute(headerShowRoutes, useLocation().pathname);
  const footerIsVisible = checkRoute(footerShowRoutes, useLocation().pathname);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState('');

  useEffect(() => {
    if (isLoggedIn) {
      const token = localStorage.getItem('jwt');
      Promise.all([
        mainApi.getUserInfo({ token }),
        mainApi.getSavedMovies({ token })
      ])
      .then(([userData, moviesData]) => {
        setCurrentUser(userData);
        setSavedMovies(moviesData);
        })
      .catch(err => {
        console.log(err);
      });
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      mainApi.getUserInfo({ token })
        .then(res => {
          if (res) {
            setIsLoggedIn(true)
          }
        })
        .catch(err => {
          console.log(err);
        })
    } else {
      setIsLoggedIn(false)
    }
  }, [navigate, isLoggedIn]);


  function handleUserRegister({ name, email, password }) {
    setIsLoading(true);
    mainApi.signupUser({ name, email, password })
      .then(res => {
        if (res) {
          handleUserLogin({ email, password });
        }
      })
      .catch(err => {
        console.log(err);
        setServerError(err);
      })
      .finally(() =>{
        setIsLoading(false);
      })
  };

  function handleUserLogin({ email, password }) {
    setIsLoading(true);
    mainApi.signinUser({ email, password })
      .then(res => {
        if (res) {
          setIsLoggedIn(true);
          localStorage.setItem('jwt', res.jwt);
          navigate('/movies', { replace: true });
        }
      })
      .catch(err => {
        console.log(err);
        setServerError(err);
      })
      .finally(() =>{
        setIsLoading(false);
      })

  };

  function handleUserLogout() {
    localStorage.clear();
    setCurrentUser({});
    setSavedMovies([]);
    setIsLoggedIn(false);
    navigate('/', {replace: true});
  }

  function handleUserUpdate({ name, email }) {
    const token = localStorage.getItem('jwt');
    setIsLoading(true);
    mainApi.updateUser({ name, email, token })
      .then(res => {
        if (res) {
          setCurrentUser(res);
          setServerError('Профиль успешно обновлен');
        }
      })
      .catch(err => {
        console.log(err);
        setServerError(err);
      })
      .finally(() =>{
        setIsLoading(false);
      })
  };

  function handleMovieSave(movie) {
    const token = localStorage.getItem('jwt');
    mainApi.saveMovie({ movie, token })
      .then(res => {
        if (res) {
          setSavedMovies([res, ...savedMovies]);
        }
      })
      .catch(err => {
        console.log(err);
        setServerError(err);
      })
  };

  function handleMovieDelete(movie) {
    const token = localStorage.getItem('jwt');
    const movieToDelete = savedMovies.find((savedMovie) => {
      return savedMovie.movieId === (movie.movieId || movie.id);
    });
    mainApi.deleteMovie(movieToDelete._id, token)
      .then(() => {
          setSavedMovies((current) => {
            return current.filter((movie) => movie._id !== movieToDelete._id);
          });
        }
      )
      .catch(err => {
        console.log(err);
        setServerError(err);
      })
  };

  return (
    <div className='page'>
      <div className='page__content'>
        <CurrentUserContext.Provider value={currentUser}>
          {headerIsVisible && <Header loggedIn={isLoggedIn}/>}
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/movies' element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                element={
                  <Movies
                    savedMovies={savedMovies}
                    onMovieSave={handleMovieSave}
                    onMovieDelete={handleMovieDelete}
                  ></Movies>
                }
              ></ProtectedRoute>
            }/>
            <Route path='/saved-movies' element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                element={
                  <SavedMovies
                    savedMovies={savedMovies}
                    onMovieDelete={handleMovieDelete}
                  ></SavedMovies>
                }
              ></ProtectedRoute>
            }/>
            <Route path='/profile' element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                element={
                  <Profile
                    currentUser={currentUser}
                    onUserUpdate={handleUserUpdate}
                    onLogout={handleUserLogout}
                    isLoading={isLoading}
                    serverError={serverError}
                    setServerError={setServerError}
                  ></Profile>
                }
              ></ProtectedRoute>
            }/>
            <Route path='/signup' element={
              <Register
                onRegister={handleUserRegister}
                loggedIn={isLoggedIn}
                isLoading={isLoading}
                serverError={serverError}
                setServerError={setServerError}
              ></Register>
            }/>
            <Route path='/signin' element={
              <Login
                onLogin={handleUserLogin}
                loggedIn={isLoggedIn}
                isLoading={isLoading}
                serverError={serverError}
                setServerError={setServerError}
              ></Login>
            }/>
            <Route path='*' element={<PageNotFound />} />
          </Routes>
          {footerIsVisible && <Footer />}
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
