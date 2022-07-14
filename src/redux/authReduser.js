const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    userId: null,
    login: null,
    isAuth: false,
};

const authReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };
        }
        default:
            return state;
    }
};

export const setAuthUserData = (userId, login) => ({
    type: SET_USER_DATA,
    data: { userId, login },
});

export default authReduser;
