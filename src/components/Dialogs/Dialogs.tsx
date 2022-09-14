import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import { ProfileType } from 'components/types/types';
import { Stack } from '@mui/material';

type PropsType ={
    friends: Array<ProfileType>
}

const Dialogs: React.FC<PropsType> = ({ friends }) => {
    const dialogsElements = friends.map((d) => (
        <DialogItem {...d} key={d.id} />
    ));

    return (
        <Stack direction={'row'} >
            {dialogsElements}
        </Stack>
    )
};

export default Dialogs;
