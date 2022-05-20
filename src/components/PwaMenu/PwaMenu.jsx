import React from 'react';
import goBackIcon from '../../assets/images/back-icon.svg'
import {StyledPwaMenu} from "../styles/StyledPwaMenu";
import {MenuWrapper} from "../styles/StyledSideMenu";
import deleteIcon from '../../assets/images/delete-icon.svg'
import editIcon from '../../assets/images/edit-bright.svg'
import statisticsIcon from '../../assets/images/stats-bright.svg'
import previewIcon from '../../assets/images/preview-bright.svg'
import {Link, NavLink, useLocation} from "react-router-dom";


const PwaMenu = () => {
  // const location = useLocation()
  // const {body, url} = location.state
  return (
    <MenuWrapper>
      <StyledPwaMenu>
      <img src={goBackIcon} alt="go back"/>
      <div className='item'>
        <Link to='/'>
          <h3>Lamoda</h3>
          <p>https://lamoda.ru</p>
      {/*<h3>{body}</h3>*/}
      {/*<p>{url}</p>*/}
      </Link>
      </div>
        <ul>
        <li>
          <NavLink to='/preview'><img src={previewIcon} alt="preview"/>Предпросмотр</NavLink></li>
        <li>
          <NavLink to='/statistics/week'><img src={statisticsIcon} alt="statistics"/>Статистика</NavLink></li>
        <li
        ><NavLink to='/editing'><img src={editIcon} alt="edit"/>Редактирование</NavLink></li>
        <li><img src={deleteIcon} alt="delete"/><p>Удалить PWA</p></li>
        </ul>
      </StyledPwaMenu>
    </MenuWrapper>

  );
};

export default PwaMenu;