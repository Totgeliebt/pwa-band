import React from 'react';
import {StyledMenuListItem} from "../styles/StyledSideMenu"
import {Link} from "react-router-dom";

const MenuListItem = ({item: {body, url}}) => {
  return (
    <StyledMenuListItem>
      <Link to='/preview'>
      <h3>{body}</h3>
      <p>{url}</p>
      </Link>
    </StyledMenuListItem>
  );
};

export default MenuListItem;