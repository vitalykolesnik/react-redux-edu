import { getAuthData } from './authReduser';

const INITIALIZED = 'INITIALIZED';

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
        const promise = dispatch(getAuthData());
        Promise.all([promise]).then(() => {
            dispatch(setInitializeSuccess());
        });
    };
};

export default appReduser;
