import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        const isAuth = useSelector((state) => state.auth.isAuth);

        if (!props.paramId && !isAuth) {
            return <Navigate to="/login" />;
        }

        // console.log(
        //     `withAuthRedirect from:${location.pathname} paramId: ${props.paramId}`
        // );
        return <Component {...props} />;
    };

    return RedirectComponent;
};
