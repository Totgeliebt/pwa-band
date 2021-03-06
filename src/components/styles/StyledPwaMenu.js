import styled from 'styled-components'

export const StyledPwaMenu = styled.div`
  position: relative;
  color: #fff;
  a {
    text-decoration: none;
    opacity: 0.5;
    color: white;
    
  }
  div {
    padding: 7px 0 7px 44px;
    margin: 19px 0 17px;
  }
  //li {
  //  opacity: 0.5;
  //}
  a:hover {
    background: #323435;
    border-radius: 15px;
    opacity: 0.7;
  }
  li:hover {
    background: #323435;
    border-radius: 15px;
  }
  .item > h3 {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #EEEEEE;
  }
  .item > p {
    color: #737576;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    opacity: 1;
  }
  img {
    position: absolute;
    top: 21px;
    left: 22px;
  }
  li {
    list-style: none;
    padding: 13px 0 12px 70px;
    margin: 0;
    position: relative;
  }
  a > img, li > img {
    position: absolute;
    top: 13px;
    left: 44px;
  }
  li:last-child {
    color: #D15537;
    margin-top: 62px;
    opacity: 1;
  }
.active {
  opacity: 1;
}
`