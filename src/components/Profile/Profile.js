import { useEffect, useState } from 'react';

import './Profile.css';
import useValidation from '../../hooks/useValidation';

function Profile({
  currentUser,
  onUserUpdate,
  onLogout,
  isLoading,
  serverError,
  setServerError,
}) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isUserUpdated, setIsUserUpdated] = useState(false);
  const {
    values,
    errors,
    isValid,
    handleChange,
    resetValidation
  } = useValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onUserUpdate(values);
  }

  function handleLogout(e) {
    e.preventDefault();
    onLogout();
  }

  function changeEditMode(e) {
    e.preventDefault();
    setIsEditMode(!isEditMode);
    values.name = currentUser.name;
    values.email = currentUser.email;
  }

  useEffect(() => {
      currentUser.name !== values.name || currentUser.email !== values.email
        ? setIsUserUpdated(true)
        : setIsUserUpdated(false);
    }, [currentUser, values]
  );

  useEffect(() => {
      resetValidation();
    }, [resetValidation]
  );

  useEffect(() => {
      setServerError('');
    }, [values, setServerError]
  );


  return (
    <main className='profile'>
      <section className='section profile__content' aria-label='Профиль пользователя'>
        <form className='profile__form'>
          <h2 className='profile__header'>{`Привет, ${currentUser.name}`}</h2>
          <fieldset className='profile__input-wrapper'>
            <div className='profile__input-container'>
              <label
                htmlFor='name'
                className='profile__label'
              >Имя</label>
              <input
                id='name'
                name='name'
                type='text'
                className='profile__input'
                value={values.name || currentUser.name}
                onChange={handleChange}
                disabled={isEditMode ? '': 'disabled'}
                required
              ></input>
              <span className='form__input-error profile__input-error'>{errors.name || ''}</span>
            </div>
            <div className='profile__input-container'>
              <label
                htmlFor='email'
                className='profile__label'
              >E-mail</label>
              <input
                id='email'
                name='email'
                type='email'
                className='profile__input'
                value={values.email || currentUser.email}
                onChange={handleChange}
                disabled={isEditMode ? '': 'disabled'}
                required
              ></input>
              <span className='form__input-error profile__input-error'>{errors.email || ''}</span>
            </div>
          </fieldset>
          {isEditMode ? (
            <div className='profile__actions'>
              <span
                className={`auth__server-error ${
                  isValid || isLoading ? '' : 'auth__server-error__active'
                }`}
              >{serverError}</span>
              <button
                type='button'
                className={`btn profile__actions_save ${!isValid || !isUserUpdated ? 'btn__primary_disabled': ''}`}
                disabled={!isValid || !isUserUpdated ? 'disabled' : ''}
                onClick={handleSubmit}
              >{isLoading ? 'Сохранение...' : 'Сохранить'}</button>
            </div>
          ) : (
            <div className='profile__actions'>
              <button
                className='btn profile__actions_edit'
                onClick={changeEditMode}
              >Редактировать</button>
              <button
                className='btn profile__actions_signout'
                onClick={handleLogout}
              >Выйти из аккаунта</button>
            </div>
          )}
        </form>
      </section>
    </main>
  );
}

export default Profile;
