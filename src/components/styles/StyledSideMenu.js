import styled from "styled-components";
export const StyledSideMenu = styled.div`
height: 100vh;
`
export const MenuWrapper = styled.div`
  width: 259px;
  background: #1A1C1E;
  box-shadow: inset -2px 0px 15px rgba(2, 26, 148, 0.04);
`;

export const StyledSearch = styled.div`
  position: relative;
  margin: 0 16px;
  img {
    position: absolute;
    top: 15px;
    left: 5px;
    opacity: 0.3;
  }
  input {
    width: 220px;
    height: 20px;
    margin: 18px 25px 14px 5px;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid #EEEEEE;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #EEEEEE;
    padding: 0 0 5px 30px;
    opacity: 0.3;
    &:focus{
      background-color: transparent;
      outline: none;
      opacity: 1;
    }
    &:focus + img {
      opacity: 1;
    }
  }
`;

export const StyledMenuList = styled.div`
  position: relative;
 div {
   opacity: 0.5;
 }
  img {
    position: absolute;
    top: 13px;
    left: 44px;
  }
  h2{
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #fff;
    padding: 14px 70px;
  }
    div:hover {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    opacity: 0.7;
  }
  div.active {
    opacity: 1;
  }
`;

export const StyledMenuListItem = styled.div`
  padding: 7px 44px;
  position: relative;
  opacity: 0.5;
a{
  text-decoration: none;
}
  &:hover{
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    opacity: 0.7;
  }
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #fff;
  }
  h3 {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #fff;
  }
  &.active {
    opacity: 1;
  }
`;

