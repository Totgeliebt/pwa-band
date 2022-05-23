import styled from "styled-components";

export const StyledEditing = styled.div`
  .sticky{
    position: sticky;
    top: 3em;
  }
  .content {
    width: 784px;
  }
  .side_button {
    width: 175px;
  }
`;

export const StyledEditHeader = styled.div`
  width: 765px;
  color: black;
  .edit_header {
    display: flex;
    position: relative;
  }
  .edit_header > img {
    margin-right: 40px;
  }
  .edit_title {
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;
    margin-bottom: 8px;
  }
  .edit_developer {
    color: #4b7e34;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;
    margin-right: 10px;
  }
  .edit_category {
    color: #4b7e34;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
  }
  .edit_url {
    color: #676767;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    margin: 16px 5px 30px 0;
  }
  .edit_copy-icon {
    position: absolute;
    top: 80px;
    left: 140px;
  }
  .edit_version {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  }
  .edit_header-info {
    display: flex;
    width: 100%;
    justify-content: space-between;
    position: relative;
  }
  .rating {
    position: absolute;
    top: 45px;
    right: 45px;
  }
  .rating > span {
    margin: 5px;
  }
  .rating > img {
    position: absolute;
    top: 5px;
  }
  .rating_stars {
    right: 20px;
  }
`;

export const StyledEditingHeader = styled.div`
  width: 765px;
  color: black;
  .editing_header {
    display: flex;
    position: relative;
  }
  .editing_change-icon {
    color: #3465ff;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-decoration: underline;
    text-align: center;
  }
  .editing_header-info {
    margin-left: 40px;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .together {
    display: flex;
    width: 100%;
  }
`;
export const StyledEditPictures = styled.div`
  margin-top: 32px;
  width: 735px;
  .edit_pictures {
    height: 100%;
    display: flex;
    overflow: hidden;
    overflow-x: scroll;
    margin-bottom: 15px;
  }
  img {
    width: 206px;
    height: 367px;
    margin-right: 8px;
    margin-bottom: 13px;
  }
  img:last-child {
    margin-right: 0;
  }
  .edit_pictures::-webkit-scrollbar {
    width: 313px;
    height: 4px;
  }
  .edit_pictures::-webkit-scrollbar-thumb {
    background: #1A1C1E;
    border-radius: 100px;
  }
  .edit_pictures::-webkit-scrollbar-track {
    background: #F7F7F7;
    border-radius: 100px;
  }
    .edit_description {
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #000000;
      padding-bottom: 32px;
      border-bottom: 1px solid #EEEEEE;
  }
`;

export const StyledEditingPictures = styled.div`
  margin: 32px 0;
  width: 735px;
  position: relative;
  .editingASO{
    color: #1A1C1E;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 12px;
  }
  .editing_pictures {
    height: 100%;
    display: flex;
    overflow: hidden;
    overflow-x: scroll;
    margin-bottom: 15px;
  }
  img {
    width: 206px;
    height: 367px;
    margin-right: 8px;
    margin-bottom: 13px;
  }
  img:last-child {
    margin-right: 0;
  }
  .wrapper img:hover ~ .editing_change-pic {
    visibility: visible;
  }
  .wrapper {
    position: relative;
  }
  .editing_change-pic{
    width:206px;
    height: 30px;
    background: #1A1C1E;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    padding: 7px 14px;
    bottom: 15px;
    visibility: hidden;
  }
  .editing_change-pic p{
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    text-decoration: underline;
  }
  .editing_change-pic img{
    margin-top: 10px;
    width: 16px;
    height: 18px;
  }
  .editing_add-icon{
    position: absolute;
    width: 88px;
    height: 88px;
    top: 180px;
    right: -51px;
    opacity: 0.9;
  }
  .editing_add-icon:hover{
    opacity: 1;
  }
  .editing_pictures::-webkit-scrollbar {
    width: 313px;
    height: 4px;
  }
  .editing_pictures::-webkit-scrollbar-thumb {
    background: #1A1C1E;
    border-radius: 100px;
  }
  .editing_pictures::-webkit-scrollbar-track {
    background: #F7F7F7;
    border-radius: 100px;
  }
  
`

export const StyledEditRating = styled.div`
  margin-top: 32px;
  width: 221px;
  h3{
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #222222;
    text-transform: uppercase;
  }
  .rating {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95px;
    margin: 16px 90px 0 43px;
  }
  p {
    font-weight: 300;
    font-size: 48px;
    line-height: 56px;
    color: #000000;
    margin-bottom: 16px;
  }
  & > img {
    width: 95px;
  }
  .total {
    margin-top: 16px;
  }
  .total img{
    width: 14px;
    height: 14px;
    transform:translateY(2px);
  }
`
export const StyledEditingRating = styled.div`
  margin-top: 32px;
  display:flex;
  align-items: flex-end;
  
select {
  width: 75px;
  height: 66px;
  border-radius: 10px;
  border: 2px solid #1A1C1E;
  font-weight: 300;
  font-size: 48px;
  line-height: 56px;
  text-align: center;
}
  span{
    padding: 0 12px;
    font-weight: 300;
    font-size: 48px;
    line-height: 56px;
  }
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 4px;
  }
  .rating_editing-valued {
    position: relative;
    margin-left: 60px;
    text-align: center;
  }
  .rating_editing-valued img{
    position: absolute;
    top: 35px;
    left: 0;
  }
  .rating_editing-valued p{
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 8px;
  }
  option{
    background: #EEEEEE;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
  }
  option:hover{
    background: #E0E0E0;
  }
`
export const StyledEditCommentsList = styled.ul`
  list-style-type: none;
  margin: 67px 0 32px 14px;
  .add_comment{
    text-align: center;
    margin-top: 16px;
    color: #3465FF;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-decoration: underline;
  }
`
export const StyledEditCommentsItem = styled.li`
  width: 500px;
  display: flex;
  position: relative;
  align-items: start;
   .comment {
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;  
    color: #000000;
    margin-top: 10px;
  }
  & > img {
    margin-right: 16px;
    width: 56px;
    height: 56px;
  }
  .user p{
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
  }
  .user span{
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #AAAAAA;
  }
  .likes{
    position: absolute;
    top: 5px;
    right: 30px;
  }
  .likes img{
    width: 18px;
    height: 18px;
  }
  .likes p {
    width: 18px;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    color: #888888;
    text-align: center;
  }
`


export const StyledEditingCommentsItem = styled.li`
  padding-bottom: 24px;
  border-bottom: 1px solid #BFBFBF;
  margin-bottom: 12px;
 h3{
   font-weight: 600;
   font-size: 16px;
   line-height: 19px;
   text-transform: uppercase;
   margin-bottom: 12px;
 }
  .comments_avatar {
    margin-right: 23px;
  }
  .comments_avatar p,.comments_likes p{
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 5px;
  }
  .comments_rating p{
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 15px;
  }
  .comments_rating {
    margin-right: 20px;
  }
  .comments_like div{
   display: flex;
    margin-top: 4px;
    justify-content: space-between;
  
  }
  .comments_like img{
  margin-right: 8px;
  }
  .comment {
    margin: 15px 0 8px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }
`
export const StyledEditUpdateInfo = styled.div`
border-top: 1px solid #EEEEEE;
  padding-top: 32px;
   font-weight: 600;
   font-size: 16px;
   line-height: 19px;
   color: #222222;
  h3{
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;
  }
  ul {
    margin-left: 25px;
  }
`
export const StyledEditingUpdateInfo = styled.div`

`