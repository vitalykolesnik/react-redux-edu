import { createStore, combineReducers } from 'redux';
import dialogsReduser from './dialogsReduser';
import navReduser from './navReduser';
import profileReduser from './profileReduser';
import usersReduser from './usersReduser';

let redusers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    navBar: navReduser,
    usersPage: usersReduser,
});

const store = createStore(redusers);

export default store;
