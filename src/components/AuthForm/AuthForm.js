import React from 'react';

function AuthForm(props) {
  return (
    <form
      id={props.id}
      name={props.name}
      className="auth__form"
      onSubmit={props.onSubmit}
    >
      <fieldset className="auth__input-wrapper">
        {props.children}
      </fieldset>
    </form>
);
}

export default AuthForm;
