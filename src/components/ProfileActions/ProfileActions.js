import { Link } from "react-router-dom";

import './ProfileActions.css';

function ProfileActions(props) {

  return (
    <>
      {props.isEditMode ? (
        <div className='profile__actions'>
          <button
            className='btn profile__actions_save'
            onClick={props.changeEditMode}
          >Сохранить</button>
        </div>
      ) : (
        <div className='profile__actions'>
          <button
            className='btn profile__actions_edit'
            onClick={props.changeEditMode}
          >Редактировать</button>
          <Link
            to='/'
            className='link profile__actions_signout'
          >Выйти из аккаунта</Link>
        </div>
      )}
    </>
  );
}

export default ProfileActions;
