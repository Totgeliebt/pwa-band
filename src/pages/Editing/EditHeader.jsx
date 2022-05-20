import React from 'react';
import {StyledEditHeader} from "../../components/styles/StyledEditing";
import appIconEdit from '../../assets/images/app-icon-edit.svg'
import copyIconEdit from '../../assets/images/copy-icon-edit.svg'
import smallStars from '../../assets/images/stars-small-edit.svg'
import userIconSmall from '../../assets/images/user-icon-small.svg'

const EditHeader = ({app:{appName, devName, url, version, category, users }}) => {

  return (
    <StyledEditHeader>
      <div className="edit_header">
        <img src={appIconEdit} alt="app icon"/>
        <div className='edit_header-info'>
        <div>
          <p className="edit_title">{appName}</p>
          <span className="edit_developer">{devName}</span>
          <span className="edit_category">{category}</span>
          <p className="edit_url">{url}</p>
          <img className='edit_copy-icon' src={copyIconEdit} alt="copy"/>
          <p className="edit_version">{version}</p>
        </div>
          <div className="rating">
            <img className='rating_stars' src={smallStars} alt="rating"/>
            <span>{users}</span>
            <img className='rating_user' src={userIconSmall} alt="users"/>
          </div>
        </div>
      </div>
    </StyledEditHeader>
  );
};

export default EditHeader