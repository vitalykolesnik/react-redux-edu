import React from 'react';
import s from './FormControl.module.css';

const FormControl = ({ input, meta, child, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>{props.children}</div>
            <div>{hasError && <span>{meta.error}</span>}</div>
        </div>
    );
};

export const TextArea = (props) => {
    const { input, meta, child, ...RestProps } = props;
    return (
        <FormControl {...props}>
            <textarea {...input} {...RestProps} />
        </FormControl>
    );
};

export const Input = (props) => {
    const { input, meta, child, ...RestProps } = props;
    return (
        <FormControl {...props}>
            <input {...input} {...RestProps} />
        </FormControl>
    );
};
