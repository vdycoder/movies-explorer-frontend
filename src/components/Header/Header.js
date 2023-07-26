import { useState} from "react";
import { Link, useLocation } from "react-router-dom";

import './Header.css'
import logo from '../../images/logo.svg';
import AuthNav from "../AuthNav/AuthNav";
import NavTab from "../NavTab/NavTab";

function Header(props) {
  const isMainPage = useLocation().pathname === "/";
  const isLoggedIn = isMainPage; // temporary value!!!

  const [isBurgerMenuActive, setIsBurgerMenuActive] = useState(false);
  //const [showNavbar, setShowNavbar] = useState(false);
  return (
    <header className={`header ${isMainPage ? "header_theme_main" : ""}`}>
      <div className="header__content">
        <Link to="/" className="header__logo-link">
          <img className="header__logo" src={logo} alt="Логотип MoviesExplorer" />
        </Link>
        {isLoggedIn ? (
          <AuthNav />
        ) : (
          <NavTab isburgerMenuActive={isBurgerMenuActive} />
        )}
      </div>
    </header>
  );
}

export default Header;
