import React from 'react';
import {  Box, Button, Drawer } from '@mui/material';
import { NavLink } from 'react-router-dom';

type PropsType = {
    isOpen: boolean
    show: (isVisible: boolean) => void
}

const Navbar: React.FC<PropsType> = ({isOpen, show}) => {
    const onSelect = () => {
        show(false)
    }

    return (
        <Box>
            <Drawer open={isOpen} onClick={onSelect} >
                <Button component={NavLink} to="/profile">Profile</Button>
                <Button component={NavLink} to="/dialogs">Messages</Button>
                <Button component={NavLink} to="/news">News</Button>
                <Button component={NavLink} to="/users">Find users</Button>
            </Drawer>
        </Box>
    );
};

export default Navbar;
