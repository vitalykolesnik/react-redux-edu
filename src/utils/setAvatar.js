import icon from '../assets/image/user_icon.png';

export const setAvatar = (image) => {
    if (!image) return icon;
    return image;
};
