export const required = (value: number) => {
    if (value) return undefined;

    return 'Field is required';
};

export const maxLength30 = (value: Array<any>) => {
    if (value && value.length > 30) return 'Max length is 30 symbols';
    return undefined;
};

export const maxLengthCreator = (maxLength: number) => (value: Array<any>) => {
    if (value && value.length > maxLength)
        return `Max length is ${maxLength} symbols`;
    return undefined;
};
