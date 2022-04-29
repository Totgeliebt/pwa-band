import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({fd}) => fd};
  justify-content: ${({jc}) => jc};
`