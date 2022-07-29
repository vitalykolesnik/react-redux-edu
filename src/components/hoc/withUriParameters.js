import React from 'react';
import { useParams } from 'react-router-dom';

export const withUriParameters = (Component) => {
    const RedirectComponent = (props) => {
        let { id } = useParams();

        // console.log(`withUriParam id: ${id}`);
        return <Component {...props} paramId={id} />;
    };

    return RedirectComponent;
};
