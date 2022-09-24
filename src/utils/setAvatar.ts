const icon = require('./../assets/image/user_icon.png');

export const setAvatar = (image: string | null) => {
    if (!image) return icon;
    return image;
};
