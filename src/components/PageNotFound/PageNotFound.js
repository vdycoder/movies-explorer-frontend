import React from 'react';

import './PageNotFound.css';
import { Link } from 'react-router-dom';

function PageNotFound(props) {
  return (
    <main className='error-page'>
      <div className='error-page__container'>
        <div className='error-page__info-wrapper'>
          <h2 className='error-page__title'>404</h2>
          <p className='error-page__subtitle'>Страница не найдена</p>
        </div>
        <span className='auth__actions_link-container'>
          <Link
            to={-1}
            className='link auth__link'
          >Назад</Link>
        </span>
      </div>
    </main>
  );
}

export default PageNotFound;
