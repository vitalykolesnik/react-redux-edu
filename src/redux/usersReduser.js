import { usersAPI } from 'api/api';

const SUBSCRIBE = 'USERS/SUBSCRIBE';
const UNSUSBSCRIBE = 'USERS/UNSUSBSCRIBE';
const SET_USERS = 'USERS/SET_USERS';
const SET_FRIENDS = 'USERS/SET_FRIENDS';
const SET_CURRENT_PAGE = 'USERS/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'USERS/SET_TOTAL_USERS_COUNT';
const SET_TOTAL_FRIENDS_COUNT = 'USERS/SET_TOTAL_FRIENDS_COUNT';
const TOGGLE_PRELOADER = 'USERS/TOGGLE_PRELOADER';
const TOGGLE_SUBSCRIBING = 'USERS/TOGGLE_SUBSCRIBING';

const initialState = {
    users: [],
    isSubscribing: [],
    friends: [],
    currentPage: 1,
    pageSize: 4,
    totalUsersCount: 0,
    totalFriendsCount: 0,
    isLoading: false,
};

const usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case SUBSCRIBE: {
            return {
                ...state,
                friends: [...state.friends, action.id],
            };
        }
        case UNSUSBSCRIBE: {
            return {
                ...state,
                friends: state.friends.filter((f) => f === action.id),
            };
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users],
            };
        }
        case SET_FRIENDS: {
            return {
                ...state,
                friends: [...action.friends],
            };
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage,
            };
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalCount,
            };
        }
        case TOGGLE_PRELOADER: {
            return {
                ...state,
                isLoading: action.isLoading,
            };
        }
        case TOGGLE_SUBSCRIBING: {
            return {
                ...state,
                isSubscribing: action.isSubscribing
                    ? [...state.isSubscribing, action.id]
                    : [state.isSubscribing.filter((id) => id !== action.id)],
            };
        }
        default:
            return state;
    }
};

export const subscribe = (id) => ({
    type: SUBSCRIBE,
    id,
});

export const unsubscribe = (id) => ({
    type: UNSUSBSCRIBE,
    id,
});

export const setUsers = (users) => ({
    type: SET_USERS,
    users,
});

export const setFriends = (friends) => ({
    type: SET_FRIENDS,
    friends,
});

export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage,
});

export const setTotalFriendsCount = (totalCount) => ({
    type: SET_TOTAL_FRIENDS_COUNT,
    totalCount,
});

export const setTotalUsersCount = (totalCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount,
});

export const togglePreloader = (isLoading) => ({
    type: TOGGLE_PRELOADER,
    isLoading,
});

export const toggleSubscribing = (id, isSubscribing) => ({
    type: TOGGLE_SUBSCRIBING,
    isSubscribing,
    id,
});

export const requestUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(togglePreloader(true));
        let response = await usersAPI.getUsers(currentPage, pageSize);
        if (!response.errorCode) {
            let { users, totalCount } = response;
            dispatch(setUsers(users));
            dispatch(setTotalUsersCount(totalCount));
        }
        dispatch(togglePreloader(false));
    };
}; // thunkCreator -> thunk -> callback

export const requestUsersPage = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(requestUsers(currentPage, pageSize));
    };
};

export const requestFriends = () => {
    return async (dispatch) => {
        let response = await usersAPI.getFriends();
        if (!response.errorCode) {
            let { friends, totalCount } = response;
            dispatch(setFriends(friends.map((f) => f.profile)));
            dispatch(setTotalFriendsCount(totalCount));
        }
    };
};

export const requestSubscribe = (id) => {
    return async (dispatch) => {
        try {
            dispatch(toggleSubscribing(id, true));
            let response = await usersAPI.subscribe(id);
            if (!response.errorCode) {
                dispatch(subscribe(id));
                dispatch(requestFriends());
            }
            dispatch(toggleSubscribing(id, false));
        } catch (e) {
            console.log(e);
        }
    };
};

export const requestUnsubscribe = (id) => {
    return async (dispatch) => {
        try {
            dispatch(toggleSubscribing(id, true));
            let response = await usersAPI.unsubscribe(id);
            if (!response.errorCode) {
                dispatch(unsubscribe(id));
                dispatch(requestFriends());
            }
            dispatch(toggleSubscribing(id, false));
        } catch (e) {
            console.log(e);
        }
    };
};

export default usersReduser;
