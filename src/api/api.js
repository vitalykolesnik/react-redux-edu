import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:5000/',
});

export const authAPI = {
    signup(login, password) {
        return instance
            .post(`/signup`, {
                login,
                password,
            })
            .then((res) => {
                return res.data;
            });
    },
    login(login, password) {
        return instance
            .post(`/login`, {
                login,
                password,
            })
            .then((res) => {
                return res.data;
            });
    },
    logout() {
        return instance.get(`/logout`).then((res) => {
            return res.data;
        });
    },
};

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 4) {
        return instance
            .get(`/users?page=${currentPage}&count=${pageSize}`)
            .then((res) => {
                return res.data;
            });
    },
    getFriends() {
        return instance.get(`/friends`).then((res) => {
            return res.data;
        });
    },
    subscribe(profileId) {
        return instance
            .post(`/friends/subscribe`, { profileId })
            .then((res) => {
                return res.data;
            });
    },
    unsubscribe(profileId) {
        return instance
            .post(`/friends/unsubscribe`, { profileId })
            .then((res) => {
                return res.data;
            });
    },
};

export const profileAPI = {
    getMe() {
        return instance.get(`/users/me`).then((res) => {
            return res.data;
        });
    },
    getProfile(id) {
        return instance.get(`/users/${id}`).then((res) => {
            return res.data;
        });
    },
    getPosts(id) {
        return instance.get(`/posts/${id}`).then((res) => {
            return res.data;
        });
    },
    getAllPosts() {
        return instance.get(`/posts`).then((res) => {
            return res.data;
        });
    },
    getStatus(id) {
        return instance.get(`/users/status/${id}`).then((res) => {
            return res.data;
        });
    },
    updateStatus(status) {
        return instance.put(`/users/status`, { status }).then((res) => {
            return res.data;
        });
    },
    updatePhoto(image) {
        const formData = new FormData();
        formData.append('image', image);
        return instance
            .put(`/users/photo`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            })
            .then((res) => {
                return res.data;
            });
    },
    addPost(payload) {
        const { text, image } = payload;
        const formData = new FormData();
        if (image) {
            for (const img of image) {
                formData.append('image', img);
            }
        }
        formData.append('text', text);
        return instance
            .post(`/posts`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            })
            .then((res) => {
                return res.data;
            });
    },
    deletePost(postId) {
        return instance.delete(`/posts/${postId}`).then((res) => {
            return res.data;
        });
    },
    likePost(postId) {
        return instance.post(`/like/${postId}`).then((res) => {
            return res.data;
        });
    },
};
