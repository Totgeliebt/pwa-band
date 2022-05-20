import React from 'react';
import {StyledMyInput} from "./styles/StyledMyInput";

const MyInput = ({label, placeholder, inputWidth,inputMarginRight, required, value, onChange }) => {
  return (
    <StyledMyInput inputWidth={inputWidth} inputMarginRight={inputMarginRight}>
    <p className='label'>{label}</p>
    <input className='input' type='text' placeholder={placeholder} required={required} value={value} onChange={onChange}>

    </input>
    </StyledMyInput>
  );
};

export default MyInput;