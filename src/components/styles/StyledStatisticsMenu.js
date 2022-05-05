import styled from "styled-components";

export const StyledStatisticsMenu = styled.div`
ul{
  display: flex;
  list-style: none;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
}
li{
  padding: 8px 24px;
  background: #EEEEEE;
  border-radius: 15px;
  margin-right: 8px;
}
  li:last-child {
    margin-left: 8px;
  }
  .active {
    background: #1A1C1E;
    color: #EEEEEE;
  }
`