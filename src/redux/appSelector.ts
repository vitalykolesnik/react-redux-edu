import { AppStateType } from "./reduxStore";

export const getInitialized = (state: AppStateType): boolean => {
    return state.app.initialized;
};
