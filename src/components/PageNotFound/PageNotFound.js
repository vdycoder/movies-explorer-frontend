import './PageNotFound.css';
import { useNavigate } from 'react-router-dom';

function PageNotFound(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <main className='error-page'>
      <div className='error-page__container'>
        <div className='error-page__info-wrapper'>
          <h2 className='error-page__title'>404</h2>
          <p className='error-page__subtitle'>Страница не найдена</p>
        </div>
        <span className='auth__actions_link-container'>
          <button className='btn auth__link error-page__btn' onClick={handleClick}>Назад</button>
        </span>
      </div>
    </main>
  );
}

export default PageNotFound;
