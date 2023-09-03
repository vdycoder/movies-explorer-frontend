import { MAIN_API_URL, MOVIES_API_URL } from './constants';

class MainApi {
  constructor(options) {
    this._options = options;
  }

  _checkResponse(res) {
    if (res.status === 204) {
      return res;
    }
    if (res.ok) {
      return res.json();
    }
    return res.json().then((err) => {
      return Promise.reject(`${err.message}`);
    })
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse)
  }

  //регистрация пользователя
  signupUser({ name, email, password }) {
    return this._request(this._options.baseUrl + '/signup', {
      method: 'POST',
      headers: this._options.headers,
      body: JSON.stringify({
        name,
        email,
        password
      })
    })
  }

  //авторизация пользователя
  signinUser({ email, password }) {
    return this._request(this._options.baseUrl + '/signin', {
      method: 'POST',
      headers: this._options.headers,
      body: JSON.stringify({
        email,
        password
      })
    })
  }

  //проверка данных профиля пользователя
  getUserInfo({ token }) {
    this._options.headers.Authorization = `Bearer ${token}`
    return this._request(this._options.baseUrl + '/users/me', {
      method: 'GET',
      headers: this._options.headers
    })
  }

  //обновление профиля пользователя
  updateUser({ name, email, token }) {
    this._options.headers.Authorization = `Bearer ${token}`
    return this._request(this._options.baseUrl + '/users/me', {
      method: 'PATCH',
      headers: this._options.headers,
      body: JSON.stringify({
        name,
        email
      }),
    })
  }

  // Получение сохраненных фильмов пользователя
  getSavedMovies({ token }) {
    this._options.headers.Authorization = `Bearer ${token}`
    return this._request(this._options.baseUrl + '/movies', {
      method: 'GET',
      headers: this._options.headers,
    })
  }

  // Сохранение фильма пользователем
  saveMovie({ movie, token }) {
    const {
      country,
      director,
      duration,
      year,
      description,
      trailerLink,
      nameRU,
      nameEN
    } = movie;
    const image = MOVIES_API_URL + movie.image.url;
    const thumbnail = MOVIES_API_URL + movie.image.formats.thumbnail.url;
    const movieId = movie.id
    this._options.headers.Authorization = `Bearer ${token}`
    return this._request(this._options.baseUrl + '/movies', {
      method: 'POST',
      headers: this._options.headers,
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        thumbnail,
        movieId,
        nameRU,
        nameEN,
      }),
    });
  }

  // Удаление фильма пользователя из сохраненных
  deleteMovie( movieId, token ) {
    this._options.headers.Authorization = `Bearer ${token}`
    return this._request(this._options.baseUrl + '/movies/' + movieId, {
      method: 'DELETE',
      headers: this._options.headers,
    });
  }
}

const mainApi = new MainApi({
  baseUrl: MAIN_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default mainApi;
