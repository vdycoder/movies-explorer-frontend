import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Register.css';
import logo from '../../images/logo.svg';
import ActionBtn from '../ActionBtn/ActionBtn';
import AuthForm from '../AuthForm/AuthForm';

function Register(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    //onRegister(email, password);
    navigate('/movies');
  }

  return (
    <main className='auth'>
      <div className='auth__header'>
        <Link
          to='/'
          className='link auth__logo-link'
        >
          <img className='auth__logo' src={logo} alt='Логотип MoviesExplorer' />
        </Link>
        <h2 className='auth__title'>Добро пожаловать!</h2>
      </div>
      <AuthForm
        id={'register-form'}
        name={'register-form'}
        onSubmit={handleSubmit}
      >
        <div className='auth__input-container'>
          <label
            htmlFor='name'
            className='auth__label'
          >Имя</label>
          <input
            id='name'
            name='name'
            className='auth__input'
            type='text'
            placeholder='Виталий'
            value={name}
            onChange={handleNameChange}
            required
          ></input>
          <span
            className='form__input-error form__input-error_field_name'
          ></span>
        </div>
        <div className='auth__input-container'>
          <label
            htmlFor='email'
            className='auth__label'
          >E-mail</label>
          <input
            id='email'
            name='email'
            className='auth__input'
            type='email'
            placeholder='pochta@yandex.ru'
            value={email}
            onChange={handleEmailChange}
            required
          ></input>
          <span
            className='form__input-error form__input-error_field_email'
          ></span>
        </div>
        <div className='auth__input-container'>
          <label
            htmlFor='password'
            className='auth__label'
          >Пароль</label>
          <input
            id='password'
            name='password'
            className='auth__input auth__input_with-error'
            type='password'
            value={password || '••••••••••••••'}
            onChange={handlePasswordChange}
            required
          ></input>
          <span
            className='form__input-error form__input-error_field_password'
          >Что-то пошло не так...</span>
        </div>
      </AuthForm>
      <nav className='auth__actions'>
        <ActionBtn
          caption={'Зарегистрироваться'}
          isDisabled={false}
          onClick={handleSubmit}
          form='register-form'
        />
        <span className='auth__actions_link-container'>
          Уже зарегистрированы?
          <Link
            to='/signin'
            className='link auth__link'
          >Войти</Link>
        </span>
      </nav>
    </main>
  );
}

export default Register;
