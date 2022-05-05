import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 1280px;
  height: 77px;
  border-bottom: 1px solid #E0E0E0;;
`;

export const StyledLogo = styled.div`
  width: 259px;
  height: 77px;
  background-color: #1a1c1e;
  border-bottom: 1px solid #2d2d2e;
  display: flex;
  padding-left: 18px;
  align-items: center;
  img {
    width: 40px;
    height: 44px;
  }
  h2 {
    margin-left: 16px;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #eeeeee;
  }
`;

export const StyledUser = styled.div`
  display: flex;
  align-items: center;
  padding-right: 32px;
  position: relative;
  img:first-child {
    width: 44px;
    height: 44px;
    margin-right: 10px;
    cursor: auto;
  }
  h2 {
    color: #1A1C1E;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
  }
  p{
    color: #AFB0B0;
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
  }
  div{
    margin-right: 16px;
  }
  img {
    cursor: pointer;
  }
  .logout {
    width: 213px;
    height:  41px;
    background: #1A1C1E;
    border-radius: 15px;
    top: 65px;
    position: absolute;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #D15537;
    padding: 11px 0 11px 20px;
    z-index: 100;
    display: flex;
  }
  .logout > img {
    width: 20px;
    height: 20px;
  }
  .logout > span {
    padding: 2px 0 0 8px;
  }
`;
