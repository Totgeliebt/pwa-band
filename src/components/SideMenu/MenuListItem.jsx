import React from 'react';
import {StyledMenuListItem} from "../styles/StyledSideMenu"

const MenuListItem = ({item: {id, body, url}}) => {
  return (
    <StyledMenuListItem>
      <h3>{body}</h3>
      <p>{url}</p>
    </StyledMenuListItem>
  );
};

export default MenuListItem;