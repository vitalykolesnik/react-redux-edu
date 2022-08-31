import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/reduxStore';
import './index.css';

// Object.defineProperty(exports, '__esModule', { value: true });
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
    // </React.StrictMode>
);
