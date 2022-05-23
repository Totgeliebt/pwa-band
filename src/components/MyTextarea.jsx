import React from 'react';
import {StyledMyTextarea} from "./styles/StyledMyTextarea";

const MyTextarea = ({value, onChange, rows, textareaLabel}) => {
  return (
    <StyledMyTextarea>
      <p className="editing_description-label">{textareaLabel}</p>
      <textarea
        className="editing_description"
        name=""
        id=""
        rows={rows}
        defaultValue={value}
        onChange={onChange}
      >
      </textarea>
    </StyledMyTextarea>
  );
};

export default MyTextarea;