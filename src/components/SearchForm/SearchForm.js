import './SearchForm.css';
import searchIcon from '../../images/search-icon.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useState } from 'react';

function SearchForm({
  searchName,
  searchError,
  isShortFilms,
  handleToggleCheckbox,
  handleSubmit
}) {
  const [searchText, setSearchText] = useState(searchName);

  function handleFormSubmit(e) {
    e.preventDefault();
    handleSubmit(searchText);
  }
  return (
    <section className='search-form' aria-label='Форма поиска фильмов'>
      <form
        id='search-form'
        name='search-form'
        className='search-form__form'
        onSubmit={handleFormSubmit}
        noValidate
      >
        <fieldset className='search-form__input-wrapper'>
          <img
            className='search-form__search-icon'
            alt='Иконка поиска'
            src={searchIcon}
          ></img>
          <input
            id='movie'
            type='text'
            name='movie'
            placeholder='Фильм'
            className='search-form__input'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            required
          ></input>
          <div className='search-form__btn-container'>
            <button
              id='submit_search'
              name='submit_search'
              type='submit'
              className='btn search-form__submit-btn'
            >Найти</button>
          </div>
          <FilterCheckbox
            isShortFilms={isShortFilms}
            handleToggleCheckbox={handleToggleCheckbox}
          />
        </fieldset>
        <span className='search-form__error'>{searchError}</span>

      </form>
    </section>
  );
}

export default SearchForm;
