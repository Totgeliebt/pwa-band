import React from 'react';
import {PageContainer, StyledBackground} from "../components/styles/PageContainer";
import {StyledPreview} from "../components/styles/StyledPreview";

const Preview = () => {
  return (
 <StyledBackground>
    <PageContainer>
      <h3>Предпросмотр</h3>
      <StyledPreview>
        <iframe src=""/>
      </StyledPreview>
    </PageContainer>
 </StyledBackground>
  );
};

export default Preview;