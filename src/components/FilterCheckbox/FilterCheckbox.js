import './FilterCheckbox.css';

function FilterCheckbox({
  isShortFilms,
  handleToggleCheckbox
}) {
  return (
    <label htmlFor='short_movie_filter' className='filter'>
      <input
        id='short_movie_filter'
        name='short_movie_filter'
        type='checkbox'
        className='filter__checkbox'
        checked={isShortFilms}
        onChange={(e) => handleToggleCheckbox(e.target.checked)}
      ></input>
      <span className='btn filter__checkbox_custom'></span>
      <span className='link filter__caption'>Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;
