import React from 'react';

import './ActionBtn.css';

function ActionBtn(props) {
  return (
    <>
      <button
        className={`
          btn
          btn__primary
          ${props.isDisabled ? 'btn__primary_disabled': ''}
        `}
        type='button'
        onClick={props.onClick}
        disabled={`${props.isDisabled ? 'disabled': ''}`}
      >{props.caption}</button>
    </>
  );
}

export default ActionBtn;
