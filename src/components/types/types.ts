export type AppUserType = {
    id: number,
    createdAt: string,
    updatedAt: string,
    appUserUserId: number,
    profileId: number,
    profile: ProfileType
}

export type AuthUserType = {
    userId: number | null,
    userName: string,
    isAuth: boolean,
}

export type ProfileType = {
    id: number
    name: string
    image: string
    description: string
    status: string
    createdAt: string
    updateAt: string
}

export type PostType = {
    id: number
    text: string
    profileId: number
    likes: Array<LikeType>
    images: Array<ImageType>
    createdAt: string
    updateAt: string
}

export type NewsType = {
    id: number
    images: Array<ImageType>
    likes: Array<LikeType>
    profile: ProfileType
    profileId: number
    text: string
    createdAt: string
    updatedAt: string
}

export type NewPostType = {
    newPostText: string,
    img: Array<File>
}

export type LikeType = {
    id: number,
    postId: number,
    profileId: number
}

export type ImageType = {
    id: number,
    image: string,
    postId: number
}

export type MessageType = {
    id: number,
    text: string
}
