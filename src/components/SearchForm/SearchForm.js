import React from 'react';

import './SearchForm.css';
import searchIcon from '../../images/search-icon.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
  return (
    <section className='search-form' aria-label='Форма поиска фильмов'>
      <form
        id='search-form'
        name='search-form'
        className='search-form__form'
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
            required
          ></input>
          <div className='search-form__btn-container'>
            <button
              id='submit_search'
              type='submit'
              name='submit_search'
              className='btn search-form__submit-btn'
            >Найти</button>
          </div>
          <FilterCheckbox />
        </fieldset>
      </form>
    </section>
  );
}

export default SearchForm;
