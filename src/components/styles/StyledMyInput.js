import styled from 'styled-components'

export const StyledMyInput = styled.div`
.label {
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #1A1C1E;
  margin-bottom: 5px;
}
  .input {
    width: ${({inputWidth}) => inputWidth};
    background: #FFFFFF;
    border: 2px solid #1A1C1E;
    border-radius: 10px;
    padding: 8px;
    margin-bottom: 12px;
    margin-right: ${({inputMarginRight}) => inputMarginRight}
  }
::placeholder {
  
}
`