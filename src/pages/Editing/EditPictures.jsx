import React from 'react';
import {StyledEditPictures} from "../../components/styles/StyledEditing";
import image1 from '../../assets/images/image1.svg'
import image2 from '../../assets/images/image2.svg'
import image3 from '../../assets/images/image3.svg'

const EditPictures = ({app: {description}}) => {
  return (
    <StyledEditPictures>
      <div className="edit_pictures">
        <img src={image1} alt="pic"/>
        <img src={image2} alt="pic"/>
        <img src={image3} alt="pic"/>
        <img src={image1} alt="pic"/>
        <img src={image2} alt="pic"/>
        <img src={image3} alt="pic"/>
        <img src={image1} alt="pic"/>
        <img src={image2} alt="pic"/>
      </div>
      <p className="edit_description">{description}</p>
    </StyledEditPictures>
  );
};

export default EditPictures;