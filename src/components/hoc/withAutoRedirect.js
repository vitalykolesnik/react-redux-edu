import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const withAutoRedirectToMain = (Component) => {
    const RedirectComponent = (props) => {
        const isAuth = useSelector((state) => state.auth.isAuth);

        if (isAuth) {
            return <Navigate to={'/profile'} />;
        }

        return <Component {...props} />;
    };

    return RedirectComponent;
};
