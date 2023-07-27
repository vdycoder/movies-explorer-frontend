import { Link } from 'react-router-dom';
import './Portfolio.css';

function Portfolio(props) {
  return (
    <div className='section__content'>
      <h2 className='portfolio__title'>{props.caption}</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <Link
              to={'https://github.com/vdycoder'}
              target='blank'
              className='portfolio__link'
          >Статичный сайт</Link>
        </li>
        <li className='portfolio__item'>
          <Link
              to={'https://github.com/vdycoder'}
              target='blank'
              className='portfolio__link'
          >Адаптивный сайт</Link>
        </li>
        <li className='portfolio__item'>
          <Link
              to={'https://github.com/vdycoder'}
              target='blank'
              className='portfolio__link'
          >Одностраничное приложение</Link>
        </li>

      </ul>
    </div>
);
}

export default Portfolio;
