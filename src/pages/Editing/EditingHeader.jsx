import React, {useState} from 'react';
import {StyledEditingHeader} from "../../components/styles/StyledEditing";
import appIconEdit from "../../assets/images/app-icon-edit.svg";
import MyInput from "../../components/MyInput";

const EditingHeader = ({app:{appName, devName, url, version, category}}, setApp) => {


  return (
    <StyledEditingHeader>
      <div className="editing_header">
        <div>
        <img className="editing_app-icon" src={appIconEdit} alt="app icon"/>
        <p className="editing_change-icon">Изменить иконку</p>
        </div>
        <div className='editing_header-info'>
           <MyInput inputWidth={'100%'} label={'Название приложения'} placeholder={'Lamoda'} required defaultValue={appName}
                    onChange={(e) => setApp({appName: e.target.value})}
             // onChange={handleNameChange}
           />
            <div className="together">
            <MyInput inputWidth={'380px'} inputMarginRight={'24px'} label={'Имя разработчика'} placeholder={'Имя' +
            ' разработчика'} defaultValue={devName}
                     onChange={(e) => setApp({devName: e.target.value})}/>
            <MyInput inputWidth={'100%'} label={'Категория'} placeholder={'Шопинг'} defaultValue={category}
                     onChange={(e) => setApp({category: e.target.value})}/>
            </div>
            <MyInput inputWidth={'100%'} label={'Сылка на сайт'} placeholder={'https://lamoda.ru'} defaultValue={url}
                     onChange={(e) => setApp({url: e.target.value})}/>
            <MyInput inputWidth={'100%'} label={'Версия'} placeholder={'1.2.5'} defaultValue={version}
                     onChange={(e) => setApp({version: e.target.value})}/>
        </div>
      </div>
    </StyledEditingHeader>
  );
};

export default EditingHeader;