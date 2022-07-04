import { createStore, combineReducers } from 'redux';
import dialogsReduser from './dialogsReduser';
import navReduser from './navReduser';
import profileReduser from './profileReduser';

let redusers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    navBar: navReduser,
});

const store = createStore(redusers);

export default store;
