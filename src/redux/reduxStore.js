import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
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

const composeEnhauncers =
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    redusers,
    composeEnhauncers(applyMiddleware(thunkMiddleware))
);

// @ts-ignore
window.__store__ = store;

export default store;
