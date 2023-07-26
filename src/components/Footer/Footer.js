import { Link } from 'react-router-dom';
import './Footer.css';

function Footer(props) {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <h2 className='footer__title'>
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h2>
        <nav className='footer__nav'>
          <p className='footer__copyright'>&copy; 2023</p>
          <ul className='footer__items-wrapper'>
            <li className='footer__item'>
              <Link
                to={'https://practicum.yandex.ru/'}
                target='blank'
                className='footer__link'
              >Яндекс.Практикум</Link>
            </li>
            <li className='footer__item'>
              <Link
                to={'https://github.com/vdycoder'}
                target='blank'
                className='footer__link'
              >Github</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
