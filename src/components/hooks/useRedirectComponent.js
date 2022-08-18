import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getUserId } from 'redux/authSelectors';

const useRedirectComponent = () => {
    const isAuth = useSelector((state) => getUserId(state));

    if (isAuth) {
        return <Navigate to={'/profile'} />;
    }
};

export default useRedirectComponent;
