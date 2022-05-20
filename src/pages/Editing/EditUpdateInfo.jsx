import React from "react";
import { StyledEditUpdateInfo } from "../../components/styles/StyledEditing";

const EditUpdateInfo = ({app: {updateInfo}}) => {
  return (
    <StyledEditUpdateInfo>
      <h3>Информация об оновлении</h3>
      <p>
        {updateInfo}
      </p>
    </StyledEditUpdateInfo>
  );
};

export default EditUpdateInfo;
