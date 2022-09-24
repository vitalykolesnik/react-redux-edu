import React from 'react';
import { useSelector } from 'react-redux';
import { getUserId } from 'redux/authSelectors';

export const withProfileId = (Component) => {
    const RedirectComponent = (props) => {
        const userId = useSelector((state) => getUserId(state));

        return <Component {...props} profileId={props.paramId || userId} />;
    };

    return RedirectComponent;
};
