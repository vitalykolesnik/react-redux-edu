import { authAPI, profileAPI } from '../api/api';

const SET_USER_DATA = 'AUTH/SET_USER_DATA';
const VALIDATE = 'AUTH/VALIDATE';

const STARTING_USER_NAME = 'Guest';

const initialState = {
    userId: null,
    userName: STARTING_USER_NAME,
    isAuth: false,
};

const authReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                userId: action.userId,
                userName: action.userName,
                isAuth: action.isAuth,
            };
        }
        case VALIDATE: {
            return {
                ...state,
                validateLoginMessage: action.loginError,
                validatePasswordMessage: action.passwordError,
            };
        }
        default:
            return state;
    }
};

export const setAuthUserData = (user) => ({
    type: SET_USER_DATA,
    userId: user.userId,
    userName: user.userName,
    isAuth: user.isAuth,
});

export const setValidateMessage = (errors) => ({
    type: VALIDATE,
    loginError: errors.login,
    passwordError: errors.password,
});

export const getAuthData = () => {
    return async (dispatch) => {
        let response = await profileAPI.getMe();
        if (!response.errorCode) {
            const { id, name } = response.dataValues;
            dispatch(
                setAuthUserData({
                    userId: id,
                    userName: name,
                    isAuth: true,
                })
            );
        }
    };
};

export const login = (login, password) => {
    return async (dispatch) => {
        let response = await authAPI.login(login, password);
        if (!response.errorCode) {
            dispatch(getAuthData());
        } else {
            console.error('Dispatch error!!!');
        }
    };
};

export const signup = (login, password) => {
    return async (dispatch) => {
        let response = await authAPI.signup(login, password);
        if (!response.errorCode) {
            dispatch(getAuthData());
        } else {
            console.error('Dispatch error!!!');
        }
    };
};

export const logout = () => {
    return async (dispatch) => {
        let response = await authAPI.logout();
        if (!response.errorCode) {
            dispatch(
                setAuthUserData({
                    userId: null,
                    userName: STARTING_USER_NAME,
                    isAuth: false,
                })
            );
        }
    };
};

export default authReduser;
