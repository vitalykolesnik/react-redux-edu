import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { addPost, typeText } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const rerenderEntireTree = (state) => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} addPost={addPost} typeText={typeText} />
            </React.StrictMode>
        </BrowserRouter>
    );
};
