import { Link } from 'react-router-dom';

import './AboutMe.css';
import avatar from '../../images/student.png';

function AboutMe(props) {
  return (
    <section className='section'>
      <div className='section__content'>
        <div className='section__header'>
          <h2 className='section__title'>{props.caption}</h2>
        </div>
        <figure className='student'>
          <figcaption className='student__description'>
            <div className='sudent__info'>
              <h2 className='student__title'>Виталий</h2>
              <p className='student__subtitle'>Фронтенд-разработчик, 30 лет</p>
              <p className='student__text'>
                Я родился и живу в Саратове, закончил факультет экономики СГУ.
                У меня есть жена и дочь. Я люблю слушать музыку, а ещё
                увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в
                компании «СКБ Контур». После того, как прошёл курс по
                веб-разработке, начал заниматься фриланс-заказами и ушёл
                с постоянной работы.
              </p>
            </div>
            <Link
              to={'https://github.com/vdycoder'}
              target='blank'
              className='student__social'
            >Github</Link>
          </figcaption>
          <img className='student__photo' src={avatar} alt='Фото студента'></img>
        </figure>
      </div>
    </section>
  );
}

export default AboutMe;
