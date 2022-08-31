import { getAuthData } from './authReduser';

const INITIALIZED = 'APP/INITIALIZED';

const initialState = {
    initialized: false,
};

const appReduser = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED: {
            return {
                ...state,
                initialized: true,
            };
        }
        default:
            return state;
    }
};

export const setInitializeSuccess = () => ({
    type: INITIALIZED,
});

export const initialize = () => {
    return (dispatch) => {
        let responce = dispatch(getAuthData());
        Promise.all([responce]).then(() => {
            dispatch(setInitializeSuccess());
        });
    };
};

export default appReduser;
