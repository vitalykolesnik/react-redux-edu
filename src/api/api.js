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
    me() {
        return instance.get(`/me`).then((res) => {
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
};

export const profileAPI = {
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
