import { AppStateType } from './reduxStore';
import { ProfileType } from './../components/types/types';
import { ResultCodeEnum, usersAPI } from './../api/api';
import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'redux';

const SUBSCRIBE = 'USERS/SUBSCRIBE';
const UNSUBSCRIBE = 'USERS/UNSUSBSCRIBE';
const SET_USERS = 'USERS/SET_USERS';
const SET_FRIENDS = 'USERS/SET_FRIENDS';
const SET_CURRENT_PAGE = 'USERS/SET_CURRENT_PAGE';
const SET_PAGE_SIZE = 'USERS/SET_PAGE_SIZE';
const SET_TOTAL_USERS_COUNT = 'USERS/SET_TOTAL_USERS_COUNT';
const SET_TOTAL_FRIENDS_COUNT = 'USERS/SET_TOTAL_FRIENDS_COUNT';
const TOGGLE_PRELOADER = 'USERS/TOGGLE_PRELOADER';
const TOGGLE_SUBSCRIBING = 'USERS/TOGGLE_SUBSCRIBING';

type InitialStateType = typeof initialState
type ActionTypes = SubscribeActionType | UnsubscribeActionType | SetUsersActionType | SetFriendsActionType | 
SetCurrentUsersPageActionType | SetPageSizeActionType | SetTotalFriendsCountActionType |
SetTotalUsersCountActionType | TogglePreloaderActionType | ToggleSubscribingActionType
type DispatchType = Dispatch<ActionTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

const initialState = {
    currentPage: 1,
    pageSize: 6,
    users: [] as Array<ProfileType>,
    isSubscribing: [] as Array<number>,
    friends: [] as Array<ProfileType>,
    totalUsersCount: 0,
    totalFriendsCount: 0,
    isLoading: false,
};

const usersReduser = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case SUBSCRIBE: {
            return {
                ...state,
                isSubscribing: [...state.isSubscribing, action.id],
            };
        }
        case UNSUBSCRIBE: {
            return {
                ...state,
                isSubscribing: state.isSubscribing.filter((f) => f === action.id),
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
        case SET_PAGE_SIZE: {
            return {
                ...state,
                pageSize: action.pageSize,
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
                    : state.isSubscribing.filter((id) => id !== action.id),
            };
        }
        default:
            return state;
    }
};

type SubscribeActionType = {
    type: typeof SUBSCRIBE,
    id: number
}

export const subscribe = (id: number): SubscribeActionType => ({
    type: SUBSCRIBE,
    id,
});

type UnsubscribeActionType = {
    type: typeof UNSUBSCRIBE,
    id: number
}

export const unsubscribe = (id: number): UnsubscribeActionType => ({
    type: UNSUBSCRIBE,
    id,
});

type SetUsersActionType = {
    type: typeof SET_USERS,
    users: Array<ProfileType>
}

export const setUsers = (users: Array<ProfileType>): SetUsersActionType => ({
    type: SET_USERS,
    users,
});

type SetFriendsActionType = {
    type: typeof SET_FRIENDS,
    friends: Array<ProfileType>
}

export const setFriends = (friends: Array<ProfileType>) : SetFriendsActionType => ({
    type: SET_FRIENDS,
    friends,
});

type SetCurrentUsersPageActionType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number
}

export const setCurrentUsersPage = (currentPage: number): SetCurrentUsersPageActionType => ({
    type: SET_CURRENT_PAGE,
    currentPage,
});

type SetPageSizeActionType = {
    type: typeof SET_PAGE_SIZE,
    pageSize: number
}

export const setPageSize = (pageSize: number) : SetPageSizeActionType => ({
    type: SET_PAGE_SIZE,
    pageSize,
});

type SetTotalFriendsCountActionType = {
    type: typeof SET_TOTAL_FRIENDS_COUNT,
    totalCount: number
}

export const setTotalFriendsCount = (totalCount: number) : SetTotalFriendsCountActionType=> ({
    type: SET_TOTAL_FRIENDS_COUNT,
    totalCount,
});

type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    totalCount: number
}

export const setTotalUsersCount = (totalCount: number): SetTotalUsersCountActionType => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount,
});

type TogglePreloaderActionType = {
    type: typeof TOGGLE_PRELOADER,
    isLoading: boolean
}

export const togglePreloader = (isLoading: boolean): TogglePreloaderActionType => ({
    type: TOGGLE_PRELOADER,
    isLoading,
});

type ToggleSubscribingActionType = {
    type: typeof TOGGLE_SUBSCRIBING,
    isSubscribing: boolean,
    id: number
}

export const toggleSubscribing = (id: number, isSubscribing: boolean) : ToggleSubscribingActionType=> ({
    type: TOGGLE_SUBSCRIBING,
    isSubscribing,
    id,
});

export const requestUsers = (currentPage: number, pageSize: number): ThunkType => {
    return async (dispatch) => {
        dispatch(togglePreloader(true));
        let data = await usersAPI.getUsers(currentPage, pageSize);
        if (data.errorCode === ResultCodeEnum.Success) {
            let { users, totalCount } = data;
            dispatch(setUsers(users));
            dispatch(setTotalUsersCount(totalCount));
            dispatch(requestFriends())
        }
        dispatch(togglePreloader(false));
    };
}; 

export const requestCurrentPage = (currentPage: number): ThunkType => {
    return async (dispatch) => {
        dispatch(setCurrentUsersPage(currentPage));
    };
};

export const requestUsersPage = (currentPage: number, pageSize: number): ThunkType => {
    return async (dispatch) => {
        dispatch(requestCurrentPage(currentPage));
        dispatch(requestUsers(currentPage, pageSize));
    };
};

export const requestFriends = (): ThunkType => {
    return async (dispatch) => {
        let data = await usersAPI.getFriends();
        if (data.errorCode === ResultCodeEnum.Success) {
            let { friends, totalCount} = data;
            dispatch(setFriends(friends.map((f: any) => f.profile)));
            dispatch(setTotalFriendsCount(totalCount));
        }
    };
};

const __subscribeUnsubscribeFlow = async (
    dispatch: DispatchType, 
    userId: number, 
    apiMethod: any, 
    actionCreator: (id: number) => SubscribeActionType | UnsubscribeActionType
    ) => {
        dispatch(toggleSubscribing(userId, true));
        let data = await apiMethod(userId);
        if (data.errorCode === ResultCodeEnum.Success) {
            dispatch(actionCreator(userId));
        }
        dispatch(toggleSubscribing(userId, false));
    };

export const requestSubscribe = (id: number): ThunkType => {
    return async (dispatch) => {
        __subscribeUnsubscribeFlow(dispatch, id, usersAPI.subscribe.bind(usersAPI), subscribe)
        dispatch(requestFriends())
    };
};

export const requestUnsubscribe = (id: number): ThunkType => {
    return async (dispatch) => {
        __subscribeUnsubscribeFlow(dispatch, id, usersAPI.unsubscribe.bind(usersAPI), unsubscribe)
        dispatch(requestFriends())
    };
};

export default usersReduser;
