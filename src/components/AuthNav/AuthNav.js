import './AuthNav.css';
import { Link, useNavigate } from "react-router-dom";

function AuthNav(props) {
  const navigate = useNavigate();

  return (
    <nav className="auth-nav">
      <ul className="auth-nav__list">
        <li className="auth-nav__item">
          <Link to="/signup" className="link auth-nav__link">
            Регистрация
          </Link>
        </li>
        <li className="auth-nav__item">
          <button
            onClick={() => {navigate('./signin')}}
            className="link auth-nav__link auth-nav__link_type_btn"
          >Войти</button>
        </li>
      </ul>
    </nav>
  );
}

export default AuthNav;
