import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import dialogsReduser from './dialogsReduser';
import profileReduser from './profileReduser';
import usersReduser from './usersReduser';
import authReduser from './authReduser';
import appReduser from './appReduser';
import thunkMiddleware from 'redux-thunk';

let rootReduser = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    usersPage: usersReduser,
    auth: authReduser,
    app: appReduser,
});

type RootReduserType = typeof rootReduser
export type AppStateType = ReturnType<RootReduserType>

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
export type InferActionsTypes<T extends {[key: string]: (...args: any[]) => any}> =  ReturnType<PropertiesTypes<T>>

// @ts-ignore
const composeEnhauncers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReduser,
    composeEnhauncers(applyMiddleware(thunkMiddleware))
);

// @ts-ignore
window.__store__ = store;

export default store;
