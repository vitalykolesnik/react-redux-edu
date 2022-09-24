import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsAuth } from 'redux/authSelectors';

export const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        const isAuth = useSelector((state) => getIsAuth(state));

        if (!props.paramId && !isAuth) {
            return <Navigate to="/login" />;
        }
        return <Component {...props} />;
    };

    return RedirectComponent;
};
