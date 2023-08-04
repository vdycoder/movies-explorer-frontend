import './Techs.css';

function Techs(props) {
  return (
    <section className='section section_landing techs'>
      <div className='section__content'>
        <div className='section__header section__header_dark'>
          <h2 className='section__title'>{props.caption}</h2>
        </div>
        <ul className='techs__content'>
          <li className='techs__item'>
            <h2 className='techs__title'>7 технологий</h2>
          </li>
          <li className='techs__item'>
            <p className='techs__subtitle'>
              На курсе веб-разработки мы освоили технологии, которые
              применили в дипломном проекте.
            </p>
          </li>
          <li className='techs__item'>
            <ul className='techs__table'>
              <li className='techs__cell'>HTML</li>
              <li className='techs__cell'>CSS</li>
              <li className='techs__cell'>JS</li>
              <li className='techs__cell'>React</li>
              <li className='techs__cell'>Git</li>
              <li className='techs__cell'>Express.js</li>
              <li className='techs__cell'>mongoDB</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
