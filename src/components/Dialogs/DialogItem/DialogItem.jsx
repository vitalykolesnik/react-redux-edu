import React from 'react';
// import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css';
import { selectDialogActionCreator } from './../../../redux/dialogsReduser';

const DialogItem = (props) => {
    let onSelectDialog = () => {
        props.dispatch(selectDialogActionCreator(props.name));
    };
    // let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialogItem}>
            {/* // <NavLink to={path} onClick={onSelectDialog}> */}
            <div onClick={onSelectDialog}>
                <img src={props.image} alt="Ooops" />
                {props.name}
            </div>
            {/* //  </NavLink> */}
        </div>
    );
};

export default DialogItem;
