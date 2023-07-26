import "./NavTab.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

function NavTab({ isburgerMenuActive }) {
  const currentPath = useLocation().pathname;
  const navigate = useNavigate();

  return (
    <nav className={`navtab ${isburgerMenuActive ? "navtab__active" : ""}`}>
      <ul className="navtab__wrapper">
        <div className="navtab__items">
          <li className="navtab__item">
            <NavLink
              to="/movies"
              className={`
                navtab__link
                ${currentPath === "/movies" ? "navtab__link_active" : ""}
              `}
            >Фильмы</NavLink>
          </li>
          <li className="navtab__item">
            <NavLink
              to="/saved-movies"
              className={`
                navtab__link
                ${currentPath === "/saved-movies" ? "navtab__link_active" : ""}
              `}
            >Сохраненные фильмы</NavLink>
          </li>
        </div>
        <li className="navtab__item">
          <button
            onClick={() => {navigate('./profile')}}
            className={`
              navtab__link
              navtab__btn
              ${currentPath === "/profile" ? "navtab__btn_active" : ""}
            `}
          >
            <p className="navtab__btn-text">Аккаунт</p>
            <div className="navtab__btn-icon"></div>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
