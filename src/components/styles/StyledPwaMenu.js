import styled from 'styled-components'

export const StyledPwaMenu = styled.div`
  position: relative;
  color: #fff;
  
div {
  padding: 7px 0 7px 44px;
  margin: 19px 0 17px;
}
  #icon {
    opacity: 0.5;
  }
  div#icon:hover {
    background: #323435;
    border-radius: 15px;
    opacity: 0.7;
  }
  div:hover {
    background: #323435;
    border-radius: 15px;
  }
  #item > h3{
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #EEEEEE;
  } 
  #item > p {
    color: #737576;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
  }
  img{
    position: absolute;
    top: 21px;
    left: 22px;
  }
  div#icon {
    padding: 13px 0 12px 70px;
    margin: 0;
    position: relative;
   
  }
  div#icon > img {
    position: absolute;
    top: 13px;
    left: 44px;
  }
  div#icon:last-child{
    color: #D15537;
    margin-top: 62px;
    opacity: 1;
  }
`