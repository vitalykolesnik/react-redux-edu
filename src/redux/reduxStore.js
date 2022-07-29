import { createStore, combineReducers, applyMiddleware } from 'redux';
import dialogsReduser from './dialogsReduser';
import navReduser from './navReduser';
import profileReduser from './profileReduser';
import usersReduser from './usersReduser';
import authReduser from './authReduser';
import appReduser from './appReduser';
import thunkMiddleware from 'redux-thunk';

let redusers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    navBar: navReduser,
    usersPage: usersReduser,
    auth: authReduser,
    app: appReduser,
});

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store;

export default store;
