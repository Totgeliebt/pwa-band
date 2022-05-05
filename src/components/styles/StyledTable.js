import styled from 'styled-components'

export const StyledTable = styled.table`
width: 100%;
  border-collapse: collapse;
  color: #222222;
  th {
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    text-align: left;
    padding: 0 0 12px 12px;
  }
  td {
    padding: 12px 10px;
    border-bottom: 1px solid #DEDEDE;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  }
  td:first-child{
    width: 55%;
  }
  td:nth-child(2){
    width: 15%;
  }
`