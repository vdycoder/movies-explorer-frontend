import { MOVIES_API_URL } from './constants';

class MoviesApi {
  constructor(options) {
    this._options = options;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse)
  }

  getAllMovies() {
    return this._request(this._options.baseUrl + '/beatfilm-movies', {
      headers: this._options.headers,
    })
  }
}

const beatfilmMoviesApi = new MoviesApi({
  baseUrl: MOVIES_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default beatfilmMoviesApi;
