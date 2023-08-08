import { useState } from "react";

import './Profile.css';
import ProfileActions from "../ProfileActions/ProfileActions";

function Profile(props) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [name, setName] = useState('Виталий');
  const [email, setEmail] = useState('pochta@yandex.ru');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function changeEditMode(e) {
    e.preventDefault()
    setIsEditMode(!isEditMode)
  }

  return (
    <main className='profile'>
      <section className='section profile__content' aria-label='Профиль пользователя'>
        <form className='profile__form'>
          <h2 className='profile__header'>Привет, Виталий!</h2>
          <fieldset className='profile__input-wrapper'>
            <div className='profile__input-container'>
              <label
                htmlFor='name'
                className='profile__label'
              >Имя</label>
              <input
                id='name'
                type='text'
                name='name'
                placeholder='Виталий'
                className='profile__input'
                value={name}
                onChange={handleNameChange}
                disabled={isEditMode ? '': 'disabled'}
                required
              ></input>
            </div>
            <div className='profile__input-container'>
              <label
                htmlFor='email'
                className='profile__label'
              >E-mail</label>
              <input
                id='email'
                type='email'
                name='email'
                placeholder='pochta@yandex.ru'
                className='profile__input'
                value={email}
                onChange={handleEmailChange}
                disabled={isEditMode ? '': 'disabled'}
                required
              ></input>
            </div>
          </fieldset>
          <ProfileActions isEditMode={isEditMode} changeEditMode={changeEditMode} />
        </form>
      </section>
    </main>
  );
}

export default Profile;
