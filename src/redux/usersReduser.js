import { usersAPI } from 'api/api';

const SUBSCRIBE = 'SUBSCRIBE';
const UNSUSBSCRIBE = 'UNSUSBSCRIBE';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER';

const initialState = {
    users: [],
    pageSize: 8,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false,
};

const usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case SUBSCRIBE: {
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.id) return { ...u, subscribed: true };
                    return u;
                }),
            };
        }
        case UNSUSBSCRIBE: {
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.id) return { ...u, subscribed: false };
                    return u;
                }),
            };
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users],
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
        default:
            return state;
    }
};

export const subscribe = (id) => ({ type: SUBSCRIBE, id });

export const unsubscribe = (id) => ({
    type: UNSUSBSCRIBE,
    id,
});

export const setUsers = (users) => ({
    type: SET_USERS,
    users,
});

export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage,
});

export const setTotalUsersCount = (totalCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount,
});

export const togglePreloader = (isLoading) => ({
    type: TOGGLE_PRELOADER,
    isLoading,
});

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(togglePreloader(true));
        usersAPI.getUsers(currentPage, pageSize).then((data) => {
            dispatch(togglePreloader(false));
            const { users, totalCount } = data;
            dispatch(setUsers(users));
            dispatch(setTotalUsersCount(totalCount));
        });
    };
}; // thunkCreator -> thunk -> callback

export default usersReduser;
