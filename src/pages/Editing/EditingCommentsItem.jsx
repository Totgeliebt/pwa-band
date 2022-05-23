import React, {useState} from 'react';
import {StyledEditingCommentsItem} from "../../components/styles/StyledEditing";
import MyInput from "../../components/MyInput";
import {Flex} from "../../components/styles/Flex";
import starsIcon from '../../assets/images/stars-icon-edit.svg'
import likeIcon from '../../assets/images/like-icon-edit.svg'
import MyTextarea from "../../components/MyTextarea";

const EditingCommentsItem = ({comItem, index, id}) => {
  const [commentsState, setCommentsState] = useState({
      name: comItem.userName,
      date: comItem.date,
      likes: comItem.likes,
    comment: comItem.comment
  })
  return (
    <StyledEditingCommentsItem>
      <h3>Комментарий </h3>
      <Flex>
      <div className='comments_avatar'>
      <p>Аватар</p>
      <img src={comItem.photo} alt="avatar"/>
      </div>
      <MyInput
        value={commentsState.name} onChange={(e) => setCommentsState({name: e.target.value})}
        label={'Имя'} inputMarginRight={'20px'}/>
      <MyInput
        value={commentsState.date}  onChange={(e) => setCommentsState({date: e.target.value})}
        label={'Дата'} inputMarginRight={'20px'}/>
      <div className='comments_rating'>
        <p>Оценка<sup>*</sup></p>
        <img src={starsIcon} alt="stars"/>
      </div>
        <div className='comments_like'>
          <p>Лайки</p>
          <div>
          <img src={likeIcon} alt="likes"/>
          <MyInput
            value={commentsState.likes} onChange={(e) => setCommentsState({likes: e.target.value})}
                   inputWidth={'57px'} />
          </div>
        </div>
      </Flex>
      <p className='comment'>Комментарий<sup>*</sup></p>
      <MyTextarea
        value={commentsState.comment} onChange={(e) => setCommentsState({comments: e.target.value})}
      />
    </StyledEditingCommentsItem>
  );
};

export default EditingCommentsItem;