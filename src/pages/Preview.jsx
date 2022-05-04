import React from 'react';
import {PageContainer} from "../components/styles/PageContainer";
import {StyledPreview} from "../components/styles/StyledPreview";

const Preview = () => {
  return (
    <PageContainer>
      <h3>Предпросмотр</h3>
      <StyledPreview>
        <iframe src=""/>
      </StyledPreview>
    </PageContainer>
  );
};

export default Preview;