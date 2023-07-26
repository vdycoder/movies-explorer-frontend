import './AuthNav.css';
import { NavLink, useNavigate } from "react-router-dom";

function AuthNav(props) {
  const navigate = useNavigate();

  return (
    <nav className="auth-nav">
      <ul className="auth-nav__list">
        <li className="auth-nav__item">
          <NavLink to="/signup" className="auth-nav__link">
            Регистрация
          </NavLink>
        </li>
        <li className="auth-nav__item">
          <button
            onClick={() => {navigate('./signin')}}
            className="auth-nav__link auth-nav__link_type_btn"
          >Войти</button>
        </li>
      </ul>
    </nav>
  );
}

export default AuthNav;
