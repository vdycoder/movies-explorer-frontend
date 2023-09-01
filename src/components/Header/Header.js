import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Header.css'
import logo from '../../images/logo.svg';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';

function Header({ loggedIn }) {
  const isMainPage = useLocation().pathname === '/';

  return (
    <header className={`section header ${isMainPage ? 'header_theme_main' : ''}`}>
      <div className='header__content'>
        <Link to='/' className='header__logo-link'>
          <img className='btn header__logo' src={logo} alt='Логотип MoviesExplorer' />
        </Link>
        {!loggedIn ? (
          <AuthNav />
        ) : (
          <Navigation />
        )}
      </div>
    </header>
  );
}

export default Header;
