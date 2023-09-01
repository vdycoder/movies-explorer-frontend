import './MoviesMoreBtn.css';

function MoviesMoreBtn({onClick}) {
  return (
    <section className='more' aria-label='Показать больше фильмов'>
      <button
        className='btn more__btn'
        onClick={onClick}
      >Ещё</button>
    </section>
  );
}

export default MoviesMoreBtn;
