import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import { ProfileType } from 'components/types/types';

type PropsType ={
    friends: Array<ProfileType>
}

const Dialogs: React.FC<PropsType> = ({ friends }) => {
    const dialogsElements = friends.map((d) => (
        <DialogItem {...d} key={d.id} />
    ));

    return <div className={s.dialogsItems}>{dialogsElements}</div>;
};

export default Dialogs;
