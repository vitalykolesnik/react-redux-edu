import { usersAPI } from 'api/api';

const SET_FRIENDS = 'SET_FRIENDS';

const initialState = {
    friends: [],
};

const navReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_FRIENDS: {
            return {
                ...state,
                friends: [...action.friends],
            };
        }
        default:
            return state;
    }
};

export const setFriends = (friends) => ({
    type: SET_FRIENDS,
    friends,
});

export const getFriends = () => {
    return (dispatch) => {
        usersAPI.getUsers(1, 5).then((data) => {
            dispatch(setFriends(data.users));
        });
    };
};

export default navReduser;
