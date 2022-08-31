import { AuthUserType } from 'components/types/types';
import { ThunkAction } from 'redux-thunk';
import { authAPI, profileAPI, ResultCodeEnum } from './../api/api';
import { AppStateType, InferActionsTypes } from './reduxStore';

const STARTING_USER_NAME = 'Guest';

type InitialStateType = typeof initialState
type ActionTypes = InferActionsTypes<typeof actions>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

const initialState = {
    userId: null as number | null,
    userName: STARTING_USER_NAME,
    isAuth: false,
};

const actions = {
    setAuthUserData: (user: AuthUserType) => ({
        type: 'AUTH/SET_USER_DATA',
        userId: user.userId,
        userName: user.userName,
        isAuth: user.isAuth,
    }) as const
}

const authReduser = (state  = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'AUTH/SET_USER_DATA': {
            return {
                ...state,
                userId: action.userId,
                userName: action.userName,
                isAuth: action.isAuth
            };
        }      
        default:
            return state;
    }
};

export const getAuthData = (): ThunkType  => {
    return async (dispatch) => {
        let data = await profileAPI.getMe();
        if (data.errorCode === ResultCodeEnum.Success) {
            const { id, name } = data.dataValues;
            dispatch(
                actions.setAuthUserData({
                    userId: id,
                    userName: name,
                    isAuth: true,
                })
            );
        }
    };
};

export const login = (login: string, password: string): ThunkType => {
    return async (dispatch) => {
        let response = await authAPI.login(login, password);
        if (response.errorCode === ResultCodeEnum.Success) {
            dispatch(getAuthData());
        } else {
            console.log('Dispatch error!!!');
        }
    };
};

export const signup = (login: string, password: string): ThunkType => {
    return async (dispatch) => {
        let response = await authAPI.signup(login, password);
        if (response.errorCode === ResultCodeEnum.Success) {
            dispatch(getAuthData());
        } else {
            console.log('Dispatch error!!!');
        }
    };
};

export const logout = (): ThunkType => {
    return async (dispatch) => {
        let response = await authAPI.logout();
        if (response.errorCode === ResultCodeEnum.Success) {
            dispatch(
                actions.setAuthUserData({
                    userId: null,
                    userName: STARTING_USER_NAME,
                    isAuth: false,
                })
            );
        }
    };
};

export default authReduser;
