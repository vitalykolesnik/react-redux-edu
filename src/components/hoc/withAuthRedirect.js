import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        const isAuth = useSelector((state) => state.auth.isAuth);

        return (
            <>{!isAuth ? <Navigate to="/login" /> : <Component {...props} />}</>
        );
    };

    return RedirectComponent;
};
