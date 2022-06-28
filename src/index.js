import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dialogs = [
    {
        id: 1,
        name: 'Kasia',
    },
    {
        id: 2,
        name: 'Murka',
    },
];

const messages = [
    {
        id: 1,
        message: 'Hi',
    },
    {
        id: 2,
        message: 'Hello',
    },
    {
        id: 3,
        message: 'Cool!!!',
    },
    {
        id: 4,
        message: 'Kskskssss',
    },
];

const posts = [
    {
        id: 1,
        message: 'How are you?',
        likeCount: 15,
    },
    {
        id: 2,
        message: "It's my first post",
        likeCount: 20,
    },
    {
        id: 3,
        message: 'New message',
        likeCount: 0,
    },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App dialogs={dialogs} messages={messages} posts={posts} />
    </React.StrictMode>
);

reportWebVitals();
