import React from 'react';
import {StyledLogo} from "../styles/StyledHeader";
import companyLogo from '../../assets/images/company-logo.svg'

const Logo = () => {
  return (
    <StyledLogo>
      <img src={companyLogo} alt="company logo"/>
      <h2>PWA Band</h2>
    </StyledLogo>

  );
};

export default Logo;