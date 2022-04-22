import React from 'react';
import MenuListItem from "./MenuListItem";
import {StyledMenuList} from "../styles/StyledSideMenu";

const content = [{
  id: 1,
  img: true,
  body: 'Название',
},
  {
    id: 2,
    img: false,
    body: 'Название',
  },{
    id: 3,
    img: true,
    body: 'Название',
  },
  {
    id: 4,
    img: true,
    body: 'Название',
  },{
    id: 5,
    img: false,
    body: 'Название',
  },
]
const MenuList = () => {
  return (
   <StyledMenuList>
    <h2>Список приложений</h2>
     {content.map((item, index) =>
       <MenuListItem key={index} item={item}/>
     )}
   </StyledMenuList>
  );
};

export default MenuList;