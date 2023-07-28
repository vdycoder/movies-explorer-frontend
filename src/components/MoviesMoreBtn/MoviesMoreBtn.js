import './MoviesMoreBtn.css';

function MoviesMoreBtn(props) {
  return (
    <section className='more'>
      <button className={`
        more__btn ${props.hasMoreMovies ? '': 'more__btn_hidden'}
      `}>
        {`${props.hasMoreMovies ? 'Ещё': ''}`}
      </button>
    </section>
  );
}

export default MoviesMoreBtn;
