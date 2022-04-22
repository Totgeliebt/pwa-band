import React from 'react';
import {StyledMenuListItem} from "../styles/StyledSideMenu"
import clipIcon from '../../assets/images/clip-icon.svg'

const MenuListItem = ({item: {id, img, body}}) => {
  return (
    <StyledMenuListItem >{
      img ? <img src={clipIcon} alt="clip"/> : null
    }
      <p>{body}</p>
    </StyledMenuListItem>
  );
};

export default MenuListItem;