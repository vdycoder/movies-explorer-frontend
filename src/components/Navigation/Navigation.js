import "./Navigation.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

function Navigation({ isburgerMenuActive }) {
  const currentPath = useLocation().pathname;
  const navigate = useNavigate();

  return (
    <nav className={`navigation ${isburgerMenuActive ? "navigation__active" : ""}`}>
      <ul className="navigation__wrapper">
        <div className="navigation__items">
          <li className="navigation__item">
            <NavLink
              to="/movies"
              className={`
                navigation__link
                ${currentPath === "/movies" ? "navigation__link_active" : ""}
              `}
            >Фильмы</NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              to="/saved-movies"
              className={`
                navigation__link
                ${currentPath === "/saved-movies" ? "navigation__link_active" : ""}
              `}
            >Сохраненные фильмы</NavLink>
          </li>
        </div>
        <li className="navigation__item">
          <button
            onClick={() => {navigate('./profile')}}
            className={`
              navigation__link
              navigation__btn
              ${currentPath === "/profile" ? "navigation__btn_active" : ""}
            `}
          >
            <p className="navigation__btn-text">Аккаунт</p>
            <div className="navigation__btn-icon"></div>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
