import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const withAutoRedirectToMain = (Component) => {
    const RedirectComponent = (props) => {
        const isAuth = useSelector((state) => state.auth.isAuth);
        const navigate = useNavigate();

        useEffect(() => {
            if (isAuth) navigate('/profile');
        });

        return <Component {...props} />;
    };

    return RedirectComponent;
};
