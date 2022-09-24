import React from 'react';
import { login } from '../../redux/authReduser';
import useRedirectComponent from '../hooks/useRedirectComponent';
import { LoginForm } from './LoginForm';
import { Box, Typography } from '@mui/material';
import { style } from './Signup';

const Login: React.FC = () => {
    const redirect = useRedirectComponent();
  
    return (
      <>
         {redirect}
          <Box sx={style}>
            <Typography variant="h6">
              Login
            </Typography>
            <LoginForm title="Login" execute={login} />
          </Box>
      </>
    );
  
};

export default Login;
