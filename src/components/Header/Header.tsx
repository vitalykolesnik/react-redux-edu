import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserId, getUserName } from '../../redux/authSelectors';
import { logout } from '../../redux/authReduser';
import { AppStateType } from 'redux/reduxStore';
import { Dispatch } from 'redux';
import Navbar from './../../components/Navbar/Navbar';

import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header: React.FC = () => {
    const userName = useSelector((state: AppStateType) => getUserName(state));
    const isAuth = useSelector((state: AppStateType) => getUserId(state));
    const dispatch: Dispatch<any> = useDispatch();
    const [visibleNavbar, setVizibleNavbar]  = useState(false)

    const onLogout = () => {
        dispatch(logout());
    };    

    const showNavbar = (isVisible: boolean) => {
        setVizibleNavbar(isVisible)
    }

    return (
        <>
            <AppBar position="fixed"  color="primary">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={() => showNavbar(true)}
                    >
                        <MenuIcon />
                    </IconButton>    
                    <Typography variant="body1" sx={{ flexGrow: 1, textAlign: 'right', mr: 2 }}>
                        Hello, {userName}!
                    </Typography>
                    {isAuth ? (
                        <Button component={NavLink} color='inherit' to="/login" onClick={onLogout}>Logout</Button>
                    ) : (
                        <div>
                            <Button component={NavLink} color='inherit' to="/login">Login</Button>
                            <Button component={NavLink} color='inherit' to="/signup">Signup</Button>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
            {visibleNavbar && <Navbar isOpen={visibleNavbar} show={showNavbar}/>}
        </>
    );
};
export default Header;
