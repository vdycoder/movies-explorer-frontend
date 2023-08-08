import React from 'react';

import './BurgerBtn.css';

function BurgerBtn({ onClick }) {
  return (
      <button
        className='btn burger__btn'
        onClick={onClick}
      >
        <span className='burger__line'></span>
      </button>
  );
}

export default BurgerBtn;
