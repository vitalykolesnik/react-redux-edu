import { createStore, combineReducers, applyMiddleware } from 'redux';
import dialogsReduser from './dialogsReduser';
import profileReduser from './profileReduser';
import usersReduser from './usersReduser';
import authReduser from './authReduser';
import appReduser from './appReduser';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let redusers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    usersPage: usersReduser,
    auth: authReduser,
    app: appReduser,
    form: formReducer,
});

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store;

export default store;
