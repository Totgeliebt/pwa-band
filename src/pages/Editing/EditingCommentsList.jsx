import React, {useState} from 'react';
import {StyledEditCommentsList, StyledEditingCommentsItem} from "../../components/styles/StyledEditing";
import EditCommentsItem from "./EditCommentsItem";
import {Flex} from "../../components/styles/Flex";
import userIcon from "../../assets/images/avatar-edit.svg";
import EditingCommentsItem from "./EditingCommentsItem";

const EditingCommentsList = () => {
  const comments = [{
    photo: userIcon,
    userName: "Kseniia Tsimbalist",
    likes: 3,
    date: '19 апреля 2022 г.',
    comment: 'Классное приложение! Спасибо разработчикам. Заказала, все что хотела и не надо в магазин идти, все супер!'
  }, {
      photo: userIcon,
      userName: "Natalia Zhur",
      likes: 1,
      date: '11 апреля 2022 г.',
      comment: 'Классное приложение! Спасибо разработчикам. Заказала, все что хотела и не надо в магазин идти, все супер!'
    },{
      photo: userIcon,
      userName: "Oleja Jew",
      likes: 10,
      date: '23 апреля 2022 г.',
      comment: 'Классное приложение! Спасибо разработчикам. Заказала, все что хотела и не надо в магазин идти, все супер!'
    }]
  return (
    <StyledEditCommentsList>
      <Flex fd={'column'}>
        {comments.map((comItem, id,index) => (
          <EditingCommentsItem  comItem={comItem} key={id} index={index}/>
        ))}
        <p className='add_comment'>+ Добавить новый комментарий</p>
      </Flex>
    </StyledEditCommentsList>
  );
};

export default EditingCommentsList;