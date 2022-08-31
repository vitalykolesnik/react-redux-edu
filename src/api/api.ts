import axios from 'axios';
import { AppUserType, ImageType, NewsType, PostType, ProfileType } from 'components/types/types';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:5000/',
});

export enum ResultCodeEnum {
    Success = 0,
    Error = 1
}

type SuccessResType = {
    errorCode: ResultCodeEnum
}

type SuccessResTypeWithJWT = {
    jwt: string
    errorCode: ResultCodeEnum
}

export const authAPI = {
    signup(login: string, password: string ) {
        return instance
            .post<SuccessResType>(`/signup`, {
                login,
                password,
            })
            .then((res) => {
                return res.data;
            });
    },
    login(login: string, password: string) {
        return instance
            .post<SuccessResTypeWithJWT>(`/login`, {
                login,
                password,
            })
            .then((res) => {
                return res.data;
            });
    },
    logout() {
        return instance.get<SuccessResType>(`/logout`).then((res) => {
            return res.data;
        });
    },
};

type GetUsersResType = {
    users: Array<ProfileType>
    totalCount: number
    errorCode: ResultCodeEnum
}

type GetFriendsResType = {
    friends: Array<AppUserType>
    totalCount: number
    errorCode: ResultCodeEnum
}

type SubscribeResType = {
    errorCode: ResultCodeEnum
    dataValues: AppUserType
}

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 4) {
        return instance
            .get<GetUsersResType>(`/users?page=${currentPage}&count=${pageSize}`)
            .then((res) => {
                return res.data;
            });
    },
    getFriends() {
        return instance.get<GetFriendsResType>(`/friends`).then((res) => {
            return res.data;
        });
    },
    subscribe(profileId: number) {
        return instance
            .post<SubscribeResType>(`/friends/subscribe`, { profileId })
            .then((res) => {
                return res.data;
            });
    },
    unsubscribe(profileId: number) {
        return instance
            .post<SuccessResType>(`/friends/unsubscribe`, { profileId })
            .then((res) => {
                return res.data;
            });
    },
};

type MeResType = {
    dataValues: {
        createdAt: string
        description: string
        id: number
        image: string
        name: string
        status: string
        updatedAt: string
    },
    errorCode: ResultCodeEnum
}

type ProfileResType = {
    profile: ProfileType
    errorCode: ResultCodeEnum
}


type PostsResType = {
    posts: Array<PostType>
    totalCount: number
    errorCode: ResultCodeEnum
}

type NewsResType = {
    posts: Array<NewsType>
    totalCount: number
    errorCode: ResultCodeEnum
}

type StatusResType = {
    status: string
    totalCount: number
    errorCode: ResultCodeEnum
}

type UpdatePhotoResType = {
    image: string
    errorCode: ResultCodeEnum
}

export type AddPostResType = {
    dataValues: PostType,
    image: Array<ImageType>
    errorCode: ResultCodeEnum
}

type LikeResType = {
    like: boolean
    errorCode: ResultCodeEnum
}

export const profileAPI = {
    getMe() {
        return instance.get<MeResType>(`/users/me`).then((res) => {
            return res.data;
        });
    },
    getProfile(id: number) {
        return instance.get<ProfileResType>(`/users/${id}`).then((res) => {
            return res.data;
        });
    },
    getPosts(id: number) {
        return instance.get<PostsResType>(`/posts/${id}`).then((res) => {
            return res.data;
        });
    },
    getAllPosts() {
        return instance.get<NewsResType>(`/posts`).then((res) => {
            return res.data;
        });
    },
    getStatus(id: number) {
        return instance.get<StatusResType>(`/users/status/${id}`).then((res) => {
            return res.data;
        });
    },
    updateStatus(status: string) {
        return instance.put<StatusResType>(`/users/status`, { status }).then((res) => {
            return res.data;
        });
    },
    updatePhoto(image: File) {
        const formData = new FormData();
        formData.append('image', image);
        return instance
            .put<UpdatePhotoResType>(`/users/photo`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            })
            .then((res) => {
                return res.data;
            });
    },
    addPost(payload: {text: string, images: Array<File>}) {
        const { text, images } = payload;
        const formData = new FormData();
        if (images) {
            for (const img of images) {
                formData.append('image', img);
            }
        }
        formData.append('text', text);
        return instance
            .post<AddPostResType>(`/posts`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            })
            .then((res) => {
                return res.data;
            });
    },
    deletePost(postId: number) {
        return instance.delete<SuccessResType>(`/posts/${postId}`).then((res) => {
            return res.data;
        });
    },
    likePost(postId: number) {
        return instance.post<LikeResType>(`/like/${postId}`).then((res) => {
            return res.data;
        });
    },
};
