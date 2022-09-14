import React from 'react';
import { TextField } from '@mui/material';
import { useField } from 'formik';


const TextFieldWrapper: React.FC<any> = ({ name, ...otherProps }) => {
    const [field, meta] = useField(name);

    const configTextField = {
        ...field,
        ...otherProps,
        fullWidth: true,
        variant: 'outlined',
        label: ''
    };

    if (meta && meta.touched && meta.error) {
        configTextField.error = true;
        configTextField.label = meta.error;
    }

    return <TextField {...configTextField} />;
};

export default TextFieldWrapper;
