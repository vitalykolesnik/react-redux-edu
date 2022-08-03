import avatar from '../assets/image/user_icon.png';

export const setAvatar = (image) => {
    if (!image) return avatar;
    return image;
};
