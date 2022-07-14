import axios from 'axios';

const instance = axios.create({
    withCredentials: false,
    baseURL: 'http://localhost:5000/',
    headers: {
        'api-key': '123',
    },
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 4) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then((res) => {
                return res.data;
            });
    },
};

export const profileAPI = {
    getProfile(id) {
        return instance.get(`users/${id}`).then((res) => {
            return res.data;
        });
    },
};
