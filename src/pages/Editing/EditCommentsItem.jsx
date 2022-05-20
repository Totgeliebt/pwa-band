import React from "react";
import { StyledEditCommentsItem } from "../../components/styles/StyledEditing";

import likeIcon from '../../assets/images/like-icon-edit.svg'
import tinyStars from '../../assets/images/stars_tiny_icon.svg'

const EditCommentsItem = ({comItem, id}) => {
  return (
      <StyledEditCommentsItem>
        <img src={comItem.photo} alt="user"/>
        <div className="user">
          <p>{comItem.userName}</p>
          <img src={tinyStars} alt="likes"/> <span>{comItem.date}</span>
          <div className="likes">
            <img src={likeIcon} alt="likes"/>
            <p>{comItem.likes}</p>
          </div>
          <p className="comment">{comItem.comment}</p>
        </div>
      </StyledEditCommentsItem>
  );
};

export default EditCommentsItem;
