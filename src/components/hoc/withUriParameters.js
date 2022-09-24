import React from 'react';
import { useParams } from 'react-router-dom';

export const withUriParameters = (Component) => {
    const RedirectComponent = (props) => {
        let { id } = useParams();

        return <Component {...props} paramId={id} />;
    };

    return RedirectComponent;
};
