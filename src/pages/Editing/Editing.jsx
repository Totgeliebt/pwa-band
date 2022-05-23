import React, { useState } from "react";
import { PageContainer } from "../../components/styles/PageContainer";
import { StyledEditing } from "../../components/styles/StyledEditing";
import { Flex } from "../../components/styles/Flex";
import Button from "../../components/SideMenu/Button";
import EditHeader from "./EditHeader";
import EditingHeader from "./EditingHeader";
import EditingPictures from "./EditingPictures";
import EditPictures from "./EditPictures";
import EditingRating from "./EditingRating";
import EditRating from "./EditRating";
import EditCommentsItem from "./EditCommentsItem";
import EditCommentsList from "./EditCommentsList";
import EditUpdateInfo from "./EditUpdateInfo";
import EditingUpdateInfo from "./EditingUpdateInfo";
import EditingCommentsList from "./EditingCommentsList";

const Editing = () => {
  const [app, setApp] = useState({
    appName: 'Lamoda',
    devName: 'Имя разработчика',
    url: 'https://lamoda.ru',
    version: 'Версия 1.2.5',
    category: 'Шопинг',
    description: 'Semper eget sem tristique vitae. Quis quam erat consectetur nunc, odio. Quis nunc, vestibulum ut' +
      ' enim, donec nunc eget. Volutpat sed sit ultrices quisque. Pulvinar tellus bibendum mauris, odio morbi cursus' +
      ' nullam.',
    rating: 4.7,
    users: 3,
    updateInfo: 'Diam, tristique nunc purus enim tellus auctor aliquet suscipit ornare. Pulvinar amet ipsum ut amet, dignissim dolor. Magna blandit ullamcorper suspendisse consectetur nec, at non faucibus. Pulvinar viverra ipsum elementum in dignissim gravida lobortis et.\n' +
      '\n' +
      'Sodales volutpat adipiscing urna tincidunt nunc convallis adipiscing tellus, ultrices. Vel, id ut massa pretium.\n' +
      'Pharetra dictumst phasellus auctor tellus nulla et. \n' +
      'Maecenas placerat cras eros, ullamcorper rhoncus phasellus. \n' +
      'Elit senectus consectetur ullamcorper nec, aliquet elementum, gravida. \n' +
      'Duis venenatis nunc, tortor mauris, nulla tristique.'
  })

  const [isEditing, setIsEditing] = useState(false);

  return (
    <PageContainer>
      <h3>Редактирование</h3>
      <StyledEditing>
        <Flex>
          <div className="content">
            {isEditing ? <EditingHeader app={app} setApp={setApp}/> : <EditHeader app={app} />}
            {isEditing ? <EditingPictures app={app} setApp={setApp}/> : <EditPictures app={app} />}
            <Flex fd={isEditing ? 'column' : 'row'}>
            {isEditing ? <EditingRating app={app} setApp={setApp}/> : <EditRating app={app} />}
              {isEditing ? <EditingCommentsList /> : <EditCommentsList/>}
            </Flex>
            {isEditing ? <EditingUpdateInfo app={app} setApp={setApp}/> : <EditUpdateInfo app={app}/>}
          </div>
          <div className="side_button">
            <div className="sticky">
            <Button
              text={isEditing ? "Сохранить" : "Редактировать"}
              width={"150px"}
              margin={'0 0 0 16px'}
              onClick={()=> setIsEditing(!isEditing)}
            />
            </div>
          </div>
        </Flex>
      </StyledEditing>
    </PageContainer>
  );
};

export default Editing;
