const SUBSCRIBE = 'SUBSCRIBE';
const UNSUSBSCRIBE = 'UNSUSBSCRIBE';
const SET_USERS = 'SET_USERS';

const initialState = {
    users: [],
};

const usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case SUBSCRIBE: {
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === parseInt(action.id))
                        return { ...u, subscribed: true };
                    return u;
                }),
            };
        }
        case UNSUSBSCRIBE: {
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === parseInt(action.id))
                        return { ...u, subscribed: true };
                    return u;
                }),
            };
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users],
            };
        }
        default:
            return state;
    }
};

export const subscribeAC = (id) => ({ type: SUBSCRIBE, id });

export const unsubscribeAC = (id) => ({
    type: UNSUSBSCRIBE,
    id,
});

export const setUsersAC = (users) => ({
    type: SET_USERS,
    users,
});

export default usersReduser;
