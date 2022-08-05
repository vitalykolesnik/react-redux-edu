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
    getUsers(currentPage = 1, pageSize = 10) {
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
        return instance.get(`/posts/${id}/all`).then((res) => {
            return res.data;
        });
    },
    getAllPosts() {
        return instance.get(`/posts/`).then((res) => {
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

    addPost(text) {
        return instance
            .post(`/posts`, {
                text,
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
};
