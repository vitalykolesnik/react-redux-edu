import { createStore, combineReducers } from 'redux';
import dialogsReduser from './dialogsReduser';
import navReduser from './navReduser';
import profileReduser from './profileReduser';
import usersReduser from './usersReduser';
import authReduser from './authReduser';

let redusers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    navBar: navReduser,
    usersPage: usersReduser,
    auth: authReduser,
});

let store = createStore(redusers);

// @ts-ignore
window.store = store;

export default store;
