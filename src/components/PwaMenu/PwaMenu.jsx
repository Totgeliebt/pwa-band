import React, {useState} from 'react';
import goBackIcon from '../../assets/images/back-icon.svg'
import {StyledPwaMenu, StyledPwaMenuItem} from "../styles/StyledPwaMenu";
import {MenuWrapper} from "../styles/StyledSideMenu";
import deleteIcon from '../../assets/images/delete-icon.svg'
import editIcon from '../../assets/images/edit-bright.svg'
import statisticsIcon from '../../assets/images/stats-bright.svg'
import previewIcon from '../../assets/images/preview-bright.svg'
import {Link, NavLink} from "react-router-dom";


const PwaMenu = ({item}) => {
const [isActive, setIsActiveItem] = useState(false)


  return (
    <MenuWrapper>
      <StyledPwaMenu>
      <img src={goBackIcon} alt="go back"/>
      <div className='item'>
        <Link to='/'>
      <h3>Lamoda</h3>
      <p>https://lamoda.ru</p>
      </Link> </div>
      {/*<MenuListItem item={item}/>*/}
        <ul>
        <li>
          <NavLink to='/preview'><img src={previewIcon} alt="preview"/>Предпросмотр</NavLink></li>
        <li>
          <NavLink to='/statisticsByWeek'><img src={statisticsIcon} alt="statistics"/>Статистика</NavLink></li>
        <li
          // onClick={() => setIsActiveItem(!isActive)} className={isActive ? 'active' : null}
        ><NavLink to='/editing'><img src={editIcon} alt="edit"/>Редактирование</NavLink></li>
        <li><img src={deleteIcon} alt="delete"/><p>Удалить PWA</p></li>
        </ul>
      </StyledPwaMenu>
    </MenuWrapper>

  );
};

export default PwaMenu;