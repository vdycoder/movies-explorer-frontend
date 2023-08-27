import React, { useCallback, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';

import logo from '../../images/logo.svg';
import ActionBtn from '../ActionBtn/ActionBtn';
import AuthForm from '../AuthForm/AuthForm';
import useValidation from '../../hooks/useValidation';

function Login({
  onLogin,
  loggedIn,
  isLoading,
  serverError,
  setServerError
}) {
  const {
    values,
    errors,
    isValid,
    handleChange,
    resetValidation
  } = useValidation();

  const handleSubmit = useCallback((e) => {
      e.preventDefault();
      onLogin(values);
    }, [values, onLogin]
  );

  useEffect(() => {
      resetValidation();
    }, [resetValidation]
  );

  useEffect(() => {
      setServerError('');
    }, [values, setServerError]
  );

  return loggedIn ? (
    <Navigate to='/movies' replace />
  ) : (
    <main className='auth'>
      <div className='auth__header'>
        <Link
          to='/'
          className='link auth__logo-link'
        >
          <img className='auth__logo' src={logo} alt='Логотип MoviesExplorer' />
        </Link>
        <h2 className='auth__title'>Рады видеть!</h2>
      </div>
      <AuthForm
        id={'login-form'}
        name={'login-form'}
      >
        <div className='auth__input-container'>
          <label
            htmlFor='email'
            className='auth__label'
          >E-mail</label>
          <input
            id='email'
            name='email'
            type='email'
            className={`auth__input ${
              errors.email in errors ? 'auth__input_with-error' : ''
            }`}
            placeholder='pochta@yandex.ru'
            value={values.email || ''}
            onChange={handleChange}
            required
          ></input>
          <span className='form__input-error'>{errors.email || ''}</span>
        </div>
        <div className='auth__input-container'>
          <label
            htmlFor='password'
            className='auth__label'
          >Пароль</label>
          <input
            id='password'
            name='password'
            type='password'
            className={`auth__input ${
              errors.password in errors ? 'auth__input_with-error' : ''
            }`}
            value={values.password || ''}
            onChange={handleChange}
            required
          ></input>
          <span className='form__input-error'>{errors.password || ''}</span>
        </div>
      </AuthForm>
      <nav className='auth__actions'>
        <span
          className={`auth__server-error ${
            isValid || isLoading ? '' : 'auth__server-error__active'
          }`}
        >{serverError}</span>

        <ActionBtn
          caption={isLoading ? 'Вход...' : 'Войти'}
          isDisabled={!isValid || isLoading}
          onClick={handleSubmit}
          form='login-form'
        />
        <span className='auth__actions_link-container'>
          Ещё не зарегистрированы?
          <Link
            to='/signup'
            className='link auth__link'
          >Регистрация</Link>
        </span>
      </nav>
    </main>
  );
}

export default Login;
