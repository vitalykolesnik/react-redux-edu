import { authAPI } from 'api/api';

const SET_USER_DATA = 'SET_USER_DATA';
const TYPE_LOGIN = 'TYPE_LOGIN';
const TYPE_PASSWORD = 'TYPE_PASSWORD';
const VALIDATE = 'VALIDATE';

const STARTING_USER_LOGIN = 'Guest';

const initialState = {
    userId: null,
    userLogin: STARTING_USER_LOGIN,
    isAuth: false,
    loginInput: '',
    passwordInput: '',
    validateLoginMessage: '',
    validatePasswordMessage: '',
};

const authReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                userLogin: action.userLogin,
                userId: action.userId,
                isAuth: action.isAuth,
            };
        }
        case TYPE_LOGIN: {
            return {
                ...state,
                loginInput: action.login,
                validateLoginMessage: '',
            };
        }
        case TYPE_PASSWORD: {
            return {
                ...state,
                passwordInput: action.password,
                validatePasswordMessage: '',
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
    userLogin: user.userLogin,
    userId: user.userId,
    isAuth: user.isAuth,
});

export const typeLogin = (login) => ({
    type: TYPE_LOGIN,
    login,
});

export const typePassword = (password) => ({
    type: TYPE_PASSWORD,
    password,
});

export const setValidateMessage = (errors) => ({
    type: VALIDATE,
    loginError: errors.login,
    passwordError: errors.password,
});

export const getAuthData = () => {
    return (dispatch) => {
        authAPI
            .me()
            .then((data) => {
                if (!data.errorCode) {
                    const { user_id, login } = data.dataValues;
                    dispatch(
                        setAuthUserData({
                            userId: user_id,
                            userLogin: login,
                            isAuth: true,
                        })
                    );
                }
            })
            .catch((e) => {
                console.log('Unautorized');
            });
    };
};

export const login = (login, password) => {
    return (dispatch) => {
        authAPI
            .login(login, password)
            .then((data) => {
                if (!data.errorCode) {
                    dispatch(getAuthData());
                }
            })
            .catch((e) => {
                dispatch(setValidateMessage(e.response.data.errors));
            });
    };
};

export const signup = (login, password) => {
    return (dispatch) => {
        authAPI
            .signup(login, password)
            .then((data) => {
                if (!data.errorCode) {
                    dispatch(getAuthData());
                }
            })
            .catch((e) => {
                dispatch(setValidateMessage(e.response.data.errors));
            });
    };
};

export const logout = () => {
    return (dispatch) => {
        authAPI
            .logout()
            .then((data) => {
                if (!data.errorCode) {
                    dispatch(
                        setAuthUserData({
                            userId: null,
                            userLogin: STARTING_USER_LOGIN,
                            isAuth: false,
                        })
                    );
                }
            })
            .catch((e) => console.log(e));
    };
};

export default authReduser;
