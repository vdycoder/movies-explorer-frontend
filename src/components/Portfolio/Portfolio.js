import { Link } from 'react-router-dom';
import './Portfolio.css';

function Portfolio(props) {
  return (
    <section className='section section_landing portfolio'>
      <div className='section__content'>
        <h2 className='portfolio__title'>{props.caption}</h2>
        <ul className='portfolio__list'>
          <li className='portfolio__item'>
            <Link
              to={'https://vdycoder.github.io/how-to-learn/'}
              target='blank'
              className='link portfolio__link'
            >Статичный сайт</Link>
          </li>
          <li className='portfolio__item'>
            <Link
              to={'https://vdycoder.github.io/russian-travel/'}
              target='blank'
              className='link portfolio__link'
            >Адаптивный сайт</Link>
          </li>
          <li className='portfolio__item'>
            <Link
              to={'https://mesto.vdycoder.nomoreparties.sbs/'}
              target='blank'
              className='link portfolio__link'
            >Одностраничное приложение</Link>
          </li>

        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
