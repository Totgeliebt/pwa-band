import React, {useState} from 'react';
import {StyledEditingPictures} from "../../components/styles/StyledEditing";
import image1 from "../../assets/images/image1.svg";
import image2 from "../../assets/images/image2.svg";
import image3 from "../../assets/images/image3.svg";
import addIcon from '../../assets/images/add-pic-icon-edit.svg'
import deleteIcon from '../../assets/images/delete-icon.svg'
import MyTextarea from "../../components/MyTextarea";

const EditingPictures = ({app:{description}}, setApp) => {

  return (
    <StyledEditingPictures>
      <p className="editingASO">ASO графика (от 3 до 8 изображений)</p>
      <div className="editing_pictures">
        <div className="wrapper">
          <img src={image1} alt="pic" />
          <div className="editing_change-pic">
            <p>Изменить</p>
            <img src={deleteIcon} alt="delete" />
          </div>
        </div>
        <div className="wrapper">
          <img src={image2} alt="pic" />
          <div className="editing_change-pic">
            <p>Изменить</p>
            <img src={deleteIcon} alt="delete" />
          </div>
        </div>
        <div className="wrapper">
          <img src={image3} alt="pic" />
          <div className="editing_change-pic">
            <p>Изменить</p>
            <img src={deleteIcon} alt="delete" />
          </div>
        </div>
        <div className="wrapper">
          <img src={image1} alt="pic" />
          <div className="editing_change-pic">
            <p>Изменить</p>
            <img src={deleteIcon} alt="delete" />
          </div>
        </div>
        <div className="wrapper">
          <img src={image2} alt="pic" />
          <div className="editing_change-pic">
            <p>Изменить</p>
            <img src={deleteIcon} alt="delete" />
          </div>
        </div>
        <div className="wrapper">
          <img src={image3} alt="pic" />
          <div className="editing_change-pic">
            <p>Изменить</p>
            <img src={deleteIcon} alt="delete" />
          </div>
        </div>
        <div className="wrapper">
          <img src={image1} alt="pic" />
          <div className="editing_change-pic">
            <p>Изменить</p>
            <img src={deleteIcon} alt="delete" />
          </div>
        </div>
        <div className="wrapper">
          <img src={image2} alt="pic" />
          <div className="editing_change-pic">
            <p>Изменить</p>
            <img src={deleteIcon} alt="delete" />
          </div>
        </div>
      </div>
      <img className="editing_add-icon" src={addIcon} alt="" />

      <MyTextarea textareaLabel="Описание приложения" rows={4} value={description}
                  onChange={(e) => setApp({description:e.target.value})}/>
    </StyledEditingPictures>
  );
};

export default EditingPictures;