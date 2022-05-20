import React from 'react';
import {StyledButton} from "../styles/StyledButton";

const Button = ({width, text, onClick, margin}) => {
  return (
    <StyledButton margin={margin} width={width} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;


