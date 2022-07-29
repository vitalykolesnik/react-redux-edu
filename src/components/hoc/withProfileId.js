import React from 'react';
import { useSelector } from 'react-redux';

export const withProfileId = (Component) => {
    const RedirectComponent = (props) => {
        const userId = useSelector((state) => state.auth.userId);

        // console.log(`withProfileId paramId: ${props.paramId} `);
        return <Component {...props} profileId={props.paramId || userId} />;
    };

    return RedirectComponent;
};
