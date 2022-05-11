import styled from "styled-components";

export const StyledStatisticsMenu = styled.div`
  margin-bottom: 10px;
  position: relative;
ul{
  display: flex;
  list-style: none;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
}
a{
  padding: 8px 24px;
  background: #EEEEEE;
  border-radius: 15px;
  margin-right: 8px;
  color: #1A1C1E;
  text-decoration: none;
}
  li:last-child {
    margin-left: 8px;
  }
  .active {
    background: #1A1C1E;
    color: #EEEEEE;
  }
  .users{
    position: absolute;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #ACACAC;
    transform: rotate(-90deg);
    top: 250px;
    left:-25px;
  }
`