import React from 'react';
import {StyledMenuListItem} from "../styles/StyledSideMenu"
import { Link, useNavigate} from "react-router-dom";

const MenuListItem = ({item: {id, body, url}}) => {
  const navigate  = useNavigate()
  return (
    <StyledMenuListItem>
      <Link to='/preview'>
      {/*<div onClick={() => {navigate('preview', {*/}
      {/*  state:{body, url}*/}
      {/*})}}>*/}
      <h3>{body}</h3>
      <p>{url}</p>
      {/*</div>*/}
      </Link>
    </StyledMenuListItem>
  );
};

export default MenuListItem;