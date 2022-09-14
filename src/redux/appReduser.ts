import { ThunkAction } from 'redux-thunk';
import { getAuthData} from './authReduser';
import { AppStateType, InferActionsTypes } from './reduxStore';

type InitialStateType = typeof initialState
type ActionTypes = InferActionsTypes<typeof actions>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

const initialState = {
    initialized: false ,
};

const actions = {
    setInitializeSuccess: () => ({
        type: 'APP/INITIALIZED',
    }) as const
}

const appReduser = (state= initialState, action: any): InitialStateType => {
    switch (action.type) {
        case 'APP/INITIALIZED': {
            return {
                ...state,
                initialized: true,
            };
        }
        default:
            return state;
    }
};

const requestInitializeSuccess =(): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.setInitializeSuccess())
    }
}

export const initialize = (): any  => {
    return (dispatch: any) => {
        let responce = dispatch(getAuthData());
        Promise.all([responce]).then(() => {
            dispatch(requestInitializeSuccess());
        });
    };
};

export default appReduser;
