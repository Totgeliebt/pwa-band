import React from 'react';
import MenuListItem from "../SideMenu/MenuListItem";
import goBackIcon from '../../assets/images/back-icon.svg'
import {StyledPwaMenu} from "../styles/StyledPwaMenu";
import {MenuWrapper, StyledSideMenu} from "../styles/StyledSideMenu";
import deleteIcon from '../../assets/images/delete-icon.svg'
import editIcon from '../../assets/images/edit-bright.svg'
import statisticsIcon from '../../assets/images/stats-bright.svg'
import previewIcon from '../../assets/images/preview-bright.svg'
import {Link} from "react-router-dom";

const PwaMenu = ({item}) => {
  return (
    <MenuWrapper>
      <StyledPwaMenu>
      <img src={goBackIcon} alt="go back"/>
      <div id='item'><Link to='/'>
      <h3>Lamoda</h3>
      <p>https://lamoda.ru</p>
      </Link> </div>
      {/*<MenuListItem item={item}/>*/}
        <div id='icon'>
          <img src={previewIcon} alt="preview"/><Link to='/preview'><p>Предпросмотр</p></Link></div>
        <div id='icon'>
          <img src={statisticsIcon} alt="statistics"/><Link to='/statistics'><p>Статистика</p></Link></div>
        <div id='icon'><img src={editIcon} alt="edit"/><Link to='/editing'><p>Редактирование</p></Link></div>
        <div id='icon'><img src={deleteIcon} alt="delete"/><p>Удалить PWA</p></div>

      </StyledPwaMenu>
    </MenuWrapper>

  );
};

export default PwaMenu;