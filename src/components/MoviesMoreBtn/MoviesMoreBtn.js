import './MoviesMoreBtn.css';

function MoviesMoreBtn(props) {
  return (
    <section className='more' aria-label='Показать больше фильмов'>
      <button className={`
        btn
        more__btn
        ${props.hasMoreMovies ? '': 'more__btn_hidden'}
      `}>Ещё</button>
    </section>
  );
}

export default MoviesMoreBtn;
