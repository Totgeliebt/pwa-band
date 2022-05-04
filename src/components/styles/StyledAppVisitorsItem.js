import styled from "styled-components";

export const StyledAppVisitorsItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  border-bottom: 0.5px solid rgba(26, 28, 30, 0.2);
  margin: 5px 0 5px 15px;
  padding-bottom: 5px;
  color: #3c65e3;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  &:first-child {
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #1a1c1e;
  }
  .chart {
    width: 216px;
    height: 39px;
    margin-right: 22px;
  }
  img {
    margin-right: 10px;
  }
  .number {
    color: black;
    margin-right: 9px;
  }
`;
