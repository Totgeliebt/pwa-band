import React from 'react';
import MenuListItem from "../SideMenu/MenuListItem";
import goBackIcon from '../../assets/images/back-icon.svg'
import {StyledPwaMenu} from "../styles/StyledPwaMenu";
import {MenuWrapper} from "../styles/StyledSideMenu";
import deleteIcon from '../../assets/images/delete-icon.svg'
import editIcon from '../../assets/images/edit-bright.svg'
import statisticsIcon from '../../assets/images/stats-bright.svg'
import previewIcon from '../../assets/images/preview-bright.svg'

const PwaMenu = ({item}) => {
  return (

    <MenuWrapper>
      <StyledPwaMenu>
      <img src={goBackIcon} alt="go back"/>
      <div id='item'>
      <h3>Lamoda</h3>
      <p>https://lamoda.ru</p>
      </div>
      {/*<MenuListItem item={item}/>*/}
        <div id='icon'>
          <img src={previewIcon} alt="preview"/><p>Предпросмотр</p></div>
        <div id='icon'>
          <img src={statisticsIcon} alt="statistics"/><p>Статистика</p></div>
        <div id='icon'><img src={editIcon} alt="edit"/><p>Редактирование</p></div>
        <div id='icon'><img src={deleteIcon} alt="delete"/><p>Удалить PWA</p></div>

      </StyledPwaMenu>
    </MenuWrapper>

  );
};

export default PwaMenu;