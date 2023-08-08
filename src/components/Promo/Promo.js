import './Promo.css';
//import promoImg from '../../images/promo.svg';

function Promo(props) {
  return (
    <section className='section section_landing promo'>
      <div className='promo__content'>
        <h1 className='promo__title'>
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <div className='promo__image'></div>
      </div>
    </section>
  );
}

export default Promo;
