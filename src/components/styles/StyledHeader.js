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
  img {
    width: 44px;
    height: 44px;
    margin-right: 10px;
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
`;
