import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const withAutoRedirectToMain = (Component) => {
    const RedirectComponent = (props) => {
        const isAuth = useSelector((state) => state.auth.isAuth);
        const pathFrom = useSelector((state) => state.auth.pathFrom);

        // console.log(`withAuthRedirectTo to:${pathFrom}`);
        if (isAuth) {
            return <Navigate to={pathFrom || '/profile'} />;
        }

        return <Component {...props} />;
    };

    return RedirectComponent;
};
