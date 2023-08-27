import img1 from '../images/tinified/pic__COLOR_pic-1.png';
import img2 from '../images/tinified/pic__COLOR_pic-2.png';
import img3 from '../images/tinified/pic__COLOR_pic-3.png';
import img4 from '../images/tinified/pic__COLOR_pic-4.png';
import img5 from '../images/tinified/pic__COLOR_pic-5.png';
import img6 from '../images/tinified/pic__COLOR_pic-6.png';
import img7 from '../images/tinified/pic__COLOR_pic-7.png';
import img8 from '../images/tinified/pic__COLOR_pic-8.png';
import img9 from '../images/tinified/pic__COLOR_pic-9.png';
import img10 from '../images/tinified/pic__COLOR_pic-10.png';
import img11 from '../images/tinified/pic__COLOR_pic-11.png';
import img12 from '../images/tinified/pic__COLOR_pic-12.png';
import img13 from '../images/tinified/pic__COLOR_pic-13.png';
import img14 from '../images/tinified/pic__COLOR_pic-14.png';
import img15 from '../images/tinified/pic__COLOR_pic-15.png';
import img16 from '../images/tinified/pic__COLOR_pic-16.png';

export const dummyMovies = [
  {
    image: { url: img1 },
    nameRU: 'Дженис: Маленькая девочка грустит',
    isSaved: false
  },
  {
    image: { url: img2 },
    nameRU: 'Бег это свобода',
    isSaved: true
  },
  {
    image: { url: img3 },
    nameRU: 'Рудбой',
    isSaved: true
  },
  {
    image: { url: img4 },
    nameRU: 'В погоне за Бенкси',
    isSaved: false
  },
  {
    image: { url: img5 },
    nameRU: 'Пи Джей Харви: A dog called money',
    isSaved: false
  },
  {
    image: { url: img6 },
    nameRU: 'Пи Джей Харви: A dog called money',
    isSaved: false
  },
  {
    image: { url: img7 },
    nameRU: 'Пи Джей Харви: A dog called money',
    isSaved: false
  },
  {
    image: { url: img8 },
    nameRU: 'Пи Джей Харви: A dog called money',
    isSaved: false
  },
  {
    image: { url: img9 },
    nameRU: 'Пи Джей Харви: A dog called money',
    isSaved: false
  },
  {
    image: { url: img10 },
    nameRU: 'Пи Джей Харви: A dog called money',
    isSaved: false
  },
  {
    image: { url: img11 },
    nameRU: 'Пи Джей Харви: A dog called money',
    isSaved: false
  },
  {
    image: { url: img12 },
    nameRU: 'Пи Джей Харви: A dog called money',
    isSaved: false
  },
  {
    image: { url: img13 },
    nameRU: 'Пи Джей Харви: A dog called money',
    isSaved: false
  },
  {
    image: { url: img14 },
    nameRU: 'Пи Джей Харви: A dog called money',
    isSaved: false
  },
  {
    image: { url: img15 },
    nameRU: 'Пи Джей Харви: A dog called money',
    isSaved: false
  },
  {
    image: { url: img16 },
    nameRU: 'Пи Джей Харви: A dog called money',
    isSaved: false
  },

];

export const dummyMoviesSaved = [
  {
    image: { url: img1 },
    nameRU: 'Дженис: Маленькая девочка грустит',
    isSaved: true
  },
  {
    image: { url: img2 },
    nameRU: 'Бег это свобода',
    isSaved: true
  },
  {
    image: { url: img3 },
    nameRU: 'Рудбой',
    isSaved: true
  },
];

export const headerShowRoutes = [
  '/',
  '/movies',
  '/saved-movies',
  '/profile',
];

export const footerShowRoutes = [
  '/',
  '/movies',
  '/saved-movies'
];

//export const MAIN_API_URL = 'https://api.movies.vdycoder.nomoredomains.xyz';
export const MAIN_API_URL = 'http://localhost:3001';

export const MOVIES_API_URL = 'https://api.nomoreparties.co';
export const USER_NAME_REGEX = /^[\p{L}\p{M}\s-]{2,30}$/gmu;
export const USER_EMAIL_REGEX = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+([a-z]{2,})$/gmu;
export const SHORT_FILM_DURATION = 40;
export const WINDOW_SIZE_M = 960;
export const WINDOW_SIZE_S = 560;
export const NUMBER_OF_CARDS_XL = 12;
export const NUMBER_OF_CARDS_L = 8;
export const NUMBER_OF_CARDS_M = 5;
export const NUMBER_OF_CARDS_S = 3;
export const NUMBER_OF_CARDS_XS = 2;
