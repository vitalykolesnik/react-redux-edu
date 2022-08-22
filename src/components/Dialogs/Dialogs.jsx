import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = ({ friends }) => {
    const dialogsElements = friends.map((d) => (
        <DialogItem {...d} key={d.id} />
    ));

    return <div className={s.dialogsItems}>{dialogsElements}</div>;
};

export default Dialogs;
