import styled from "styled-components";

export const StyledButton = styled.button`
  width:  ${({width}) => width};
  height: 45px;
  margin:  ${({margin}) => margin};
  background: #3C65E3;
  border-radius: 15px;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #EEEEEE;
  border: none;
  &:hover{
    background-color: white;
    color: black;
    border: 2px solid #3C65E3;
    cursor: pointer;
  }
`