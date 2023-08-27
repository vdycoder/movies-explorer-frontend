import { useCallback, useState } from 'react';
import { USER_NAME_REGEX, USER_EMAIL_REGEX } from '../utils/constants';

function useValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === 'name' && !value.match(USER_NAME_REGEX)) {
      e.target.setCustomValidity(
        'Поле Имя должно содержать только латиницу, кириллицу, пробел или дефис'
      );
    } else if (name === 'email' && !value.match(USER_EMAIL_REGEX)) {
      e.target.setCustomValidity(
        'Необходимо указать E-mail в формате pochta@domain.zone'
      );
    } else {
      e.target.setCustomValidity('');
    }
    setValues((values) => ({ ...values, [name]: value }));
    setErrors((errors) => ({ ...errors, [name]: e.target.validationMessage }));
    setIsValid(e.target.closest('form').checkValidity());
  };

  const resetValidation = useCallback(() => {
      setValues({});
      setErrors({});
      setIsValid(false);
    }, [setValues, setErrors, setIsValid]
  );

  return { values, errors, isValid, handleChange, resetValidation };
}

export default useValidation;
