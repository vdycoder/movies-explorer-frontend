import './Promo.css';
import promoImg from '../../images/promo.svg';

function Promo(props) {
  return (
    <section className='promo'>
      <div className='promo__content'>
        <h1 className='promo__title'>
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <img className='promo__image' src={promoImg} alt='Промо картинка' />
      </div>

    </section>
  );
}

export default Promo;
