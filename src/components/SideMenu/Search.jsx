import React from 'react';
import {StyledSearch} from "../styles/StyledSideMenu";
import searchIcon from '../../assets/images/search-icon.svg'

const Search = () => {
  return (
    <StyledSearch >
      <input type="text" placeholder="Поиск..."/>
      <img src={searchIcon} alt="search"/>
      
    </StyledSearch>
  );
};

export default Search;