import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './OverflowNav.css';

function OverflowNav({ isActive, onClick }) {
  const currentPath = useLocation().pathname;
  return (
    <div className={`
      overflow__container
      ${isActive ? 'overflow__container_active' : ''}
    `}>
      <nav className='overflow__navigation'>
        <button className='btn overflow__close-btn' onClick={onClick}>
          <span className='overflow__close-btn_line'></span>
        </button>
        <ul className='overflow__nav-wrapper'>
          <div className='overflow__nav-items'>
            <li className='overflow__nav-item'>
              <Link
                to='/'
                className={`
                  link
                  overflow__link
                  ${currentPath === '/' ? 'overflow__link_active' : ''}
                `}
              >Главная</Link>
            </li>
            <li className='overflow__nav-item'>
              <Link
                to='/movies'
                className={`
                  link
                  overflow__link
                  ${currentPath === '/movies' ? 'overflow__link_active' : ''}
                `}
                onClick={onClick}
              >Фильмы</Link>
            </li>
            <li className='overflow__nav-item'>
              <Link
                to='/saved-movies'
                className={`
                  link
                  overflow__link
                  ${currentPath === '/saved-movies' ? 'overflow__link_active' : ''}
                `}
                onClick={onClick}
              >Сохраненные фильмы</Link>
            </li>
          </div>
          <li className='overflow__nav-item'>
            <Link
              to='/profile'
              onClick={onClick}
              className={`
                btn
                overflow__link
                navigation__btn
                ${currentPath === '/profile' ? 'navigation__btn_active' : ''}
              `}
            >
              <p className='overflow__btn-text'>Аккаунт</p>
              <div className='navigation__btn-icon'></div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default OverflowNav;
