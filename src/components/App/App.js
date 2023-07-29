import { Route, Routes, useLocation } from "react-router-dom";

import './App.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import { checkRoute } from "../../utils/utils";

import {
  headerShowRoutes,
  footerShowRoutes,
} from "../../utils/constants";

function App() {
  const headerIsVisible = checkRoute(
    headerShowRoutes, useLocation().pathname
  );
  const footerIsVisible = checkRoute(
    footerShowRoutes, useLocation().pathname
  );

  return (
    <div className="page">
      <div className="page__content">
        {headerIsVisible && <Header />}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          {/*<Route path="*" element={<PageNotFound />} /> */}
        </Routes>
        {footerIsVisible && <Footer />}
      </div>
    </div>
  );
}

export default App;
