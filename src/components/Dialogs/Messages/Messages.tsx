import React from 'react';
import MessageForm from './MessageForm';
import { MessageType } from 'components/types/types';
import { List, ListItem, ListItemText, Stack } from '@mui/material';

type PropsType ={
    messages: Array<MessageType>
}

const Messages: React.FC<PropsType>= ({ messages }) => {
    const messagesElements = messages.map((m) => (
        <ListItem key={m.id} >
            <ListItemText primary={m.text} /> 
        </ListItem>
    ))

    return (
        <Stack>
            <MessageForm />
            <List sx={{ width: '100%', maxWidth: 100, bgcolor: 'background.paper' }}>
                {messagesElements}
            </List>
        </Stack>
    )
};

export default Messages;
