import React from 'react';
import MenuListItem from "./MenuListItem";
import {StyledMenuList} from "../styles/StyledSideMenu";
import appsIcon from '../../assets/images/apps-icon-bright.svg'

const content = [{
  id: 1,
  body: 'Lamoda',
  url: 'https://lamoda.ru'
},
  {
    id: 2,
    body: 'Telegram',
    url: 'https://telegram.ru'
  },{
    id: 3,
    body: 'PetShop',
    url: 'https://petshop.ru'
  },
]

const MenuList = () => {
  return (
   <StyledMenuList>
     <div className='active'>
     <img src={appsIcon} alt="apps"/>
    <h2>Все приложения</h2>
     </div>
     {content.map((item, index) =>
       <MenuListItem key={index} item={item}/>
     )}
   </StyledMenuList>
  );
};

export default MenuList;