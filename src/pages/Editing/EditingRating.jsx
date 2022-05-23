import React from 'react';
import {StyledEditingRating} from "../../components/styles/StyledEditing";
import MyInput from "../../components/MyInput";
import userIcon from '../../assets/images/user-icon-edit.svg'

const EditingRating = () => {
  return (
    <StyledEditingRating>
      <div>
      <p>Рейтинг</p>
      <select name="" id="">
        <option value="">5</option>
        <option value="">4</option>
        <option value="">3</option>
        <option value="">2</option>
        <option value="">1</option>
      </select>
      <span>,</span>
      <select name="" id="">
        <option value="">0</option>
        <option value="">9</option>
        <option value="">8</option>
        <option value="">7</option>
        <option value="">6</option>
        <option value="">5</option>
        <option value="">4</option>
        <option value="">3</option>
        <option value="">2</option>
        <option value="">1</option>
      </select>
      </div>
      <div className='rating_editing-valued'>
        <p>Всего оценили</p>
        <img src={userIcon} alt="users"/>
        <MyInput inputWidth={'57px'} placeholder={3} />
      </div>
    </StyledEditingRating>
  );
};

export default EditingRating;