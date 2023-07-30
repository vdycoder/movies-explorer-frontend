import './FilterCheckbox.css';

function FilterCheckbox(props) {
  return (
    <label htmlFor='short_movie_filter' className='filter'>
      <input
        id='short_movie_filter'
        type='checkbox'
        name='short_movie_filter'
        className='filter__checkbox'
      ></input>
      <span className='filter__checkbox_custom'></span>
      <span className='link filter__caption'>Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;
