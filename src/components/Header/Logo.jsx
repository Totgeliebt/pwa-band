import React from 'react';
import {StyledLogo} from "../styles/StyledHeader";
import {Flex} from "../styles/Flex";
import logo from '../../assets/images/logo.svg'

const Logo = () => {
  return (
    <StyledLogo>
      <Flex jc="center">
      <img src={logo} alt="company logo"/>
      <h2>Company logo</h2>
      </Flex>
    </StyledLogo>
  );
};

export default Logo;