import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import './NavigationTab.css';

function NavigationTab(props) {
  const currentPath = useLocation().pathname;
  const navigate = useNavigate();

  return (
    <>
    <nav className='navigation'>
      <ul className='navigation__wrapper'>
        <div className='navigation__items'>
          <li className='navigation__item'>
            <Link
              to='/movies'
              className={`
                link
                navigation__link
                ${currentPath === '/movies' ? 'navigation__link_active' : ''}
              `}
            >Фильмы</Link>
          </li>
          <li className='navigation__item'>
            <Link
              to='/saved-movies'
              className={`
                link
                navigation__link
                ${currentPath === '/saved-movies' ? 'navigation__link_active' : ''}
              `}
            >Сохраненные фильмы</Link>
          </li>
        </div>
        <li className='navigation__item'>
          <button
            onClick={() => {navigate('./profile')}}
            className={`
              navigation__link
              btn
              navigation__btn
              ${currentPath === '/profile' ? 'navigation__btn_active' : ''}
            `}
          >
            <p className='navigation__btn-text'>Аккаунт</p>
            <div className='navigation__btn-icon'></div>
          </button>
        </li>
      </ul>
    </nav>
    </>
  );
}

export default NavigationTab;
