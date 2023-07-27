import './AboutProject.css';

function AboutProject(props) {
  return (
    <section className='section'>
      <div className='section__content'>
        <div className='section__header'>
          <h2 className='section__title'>{props.caption}</h2>
        </div>
        <ul className='about__roadmap'>
          <li className='about__milestone'>
            <h3 className='about__subtitle'>
              Дипломный проект включал 5 этапов
            </h3>
            <p className='about__text'>
              Составление плана, работу над бэкендом, вёрстку,
              добавление функциональности и финальные доработки.
            </p>
          </li>
          <li className='about__milestone'>
            <h3 className='about__subtitle'>
              На выполнение диплома ушло 5 недель
            </h3>
            <p className='about__text'>
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно
              было соблюдать, чтобы успешно защититься.
            </p>
          </li>
        </ul>
        <ul className='about__table'>
          <li className='about__cell about__cell_color_primary'>1 неделя</li>
          <li className='about__cell about__cell_color_secondary'>4 недели</li>
          <li className='about__cell'>Back-end</li>
          <li className='about__cell'>Front-end</li>
        </ul>
      </div>
    </section>
  );
}

export default AboutProject;
