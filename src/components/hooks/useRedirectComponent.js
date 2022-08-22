import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsAuth } from 'redux/authSelectors';

const useRedirectComponent = () => {
    const isAuth = useSelector((state) => getIsAuth(state));

    if (isAuth) {
        return <Navigate to={'/profile'} />;
    }
};

export default useRedirectComponent;
