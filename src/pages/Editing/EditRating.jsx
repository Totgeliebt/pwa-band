import React from 'react';
import {StyledEditRating} from "../../components/styles/StyledEditing";
import stars from '../../assets/images/stars-icon-edit.svg'
import userIcon from '../../assets/images/user-icon-edit.svg'

const EditRating = ({app:{rating, users} }) => {
  return (
    <StyledEditRating>
      <h3>Комментарии и рейтинг</h3>
      <div className="rating"><p>{rating}</p>
      <img src={stars} alt="rating"/>
      <div className='total'>
      <span>Всего: {users}</span>
      <img src={userIcon} alt="users"/>
      </div>
      </div>
    </StyledEditRating>

  );
};

export default EditRating;