import React from 'react';
import {StyledEditingUpdateInfo} from "../../components/styles/StyledEditing";
import MyTextarea from "../../components/MyTextarea";

const EditingUpdateInfo = ({app: {updateInfo}}, setApp) => {

  return (
    <StyledEditingUpdateInfo>
      <MyTextarea onChange={(e) => setApp({updateInfo:e.target.value})} defaultValue={updateInfo} textareaLabel={'Инофрмация' +
      ' об обновлении'} rows={11}/>
    </StyledEditingUpdateInfo>
  );
};

export default EditingUpdateInfo;