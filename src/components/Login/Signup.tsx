import React from 'react';
import { signup } from '../../redux/authReduser';
import useRedirectComponent from '../hooks/useRedirectComponent';
import { LoginForm } from './LoginForm';
import { Box, Typography } from '@mui/material';

export const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 10,
    p: 4,
};

const Signup: React.FC = () => {
    const redirect = useRedirectComponent();

    return (
        <>
            {redirect}
            <Box sx={style}>
                <Typography variant="h6">
                Signup
                </Typography>
                <LoginForm title="Signup" execute={signup} />
            </Box>
        </>
    );
};

export default Signup;
