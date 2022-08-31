import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsAuth } from 'redux/authSelectors';

export const withAutoRedirectToMain = (Component) => {
    const RedirectComponent = (props) => {
        const isAuth = useSelector((state) => getIsAuth(state));

        if (isAuth) {
            return <Navigate to={'/profile'} />;
        }

        return <Component {...props} />;
    };

    return RedirectComponent;
};
