import styled from "styled-components";

export const StyledSideMenu = styled.div`
  width: 274px;
  height: 100vh;
  background: #f9f9f9;
  box-shadow: inset -2px 0px 15px rgba(2, 26, 148, 0.04);
  padding: 20px 16px;
`;

export const StyledSearch = styled.div`
  position: relative;
  img {
    position: absolute;
    top: 15px;
    left: 5px;
  }
  input { width: 242px;
    height: 20px;
    margin: 18px 0 14px;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid rgba(36, 172, 216, 1);
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #979797;
    padding: 0 0 5px 30px;
    &:focus {
      background-color: transparent;
      outline: none;
    }
  }
`
export const StyledMenuListItem =  styled.div`
  padding: 14px 0 14px 63px;
  position: relative;
  p {
    font-weight: 500;
  font-size: 14px;
  line-height: 16px;}
 img {
   position: absolute;
   top: 10px;
   left: 35px;
 }
  &:hover {
    background-color: #C4E3ED;
  }
`
export const StyledMenuList = styled.div`
h2 {
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  padding: 14px 32px;
}
  h2:hover {
    background-color: #C4E3ED;
  }
`