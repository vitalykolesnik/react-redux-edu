const dialogs = [
    {
        id: 1,
        name: 'Murka',
        image: 'https://t4.ftcdn.net/jpg/02/63/04/43/360_F_263044311_eLTaYpz9zQ61fVP4rSWAfkpG2HlspXIK.jpg',
    },
    {
        id: 2,
        name: 'Kasia',
        image: 'https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg',
    },
    {
        id: 3,
        name: 'Barsik',
        image: 'https://www.ozarksfirst.com/wp-content/uploads/sites/65/2020/03/cat-in-belgium.jpg',
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

const ADD_POST = 'ADD-POST';
const TYPE_TEXT = 'TYPE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const TYPE_MESSAGE = 'TYPE-MESSAGE';

const state = {
    profilePage: {
        posts,
        newPostText: '',
    },
    dialogsPage: {
        dialogs,
        messages,
        newMessageText: '',
    },
    navBar: {
        sideBar: {
            friends: dialogs,
        },
    },
};

let store = {
    _state: state,
    _callSubscribers() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscribers = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost = {
                id: this._state.profilePage.posts.length + 1,
                message: this._state.profilePage.newPostText,
                likeCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscribers();
        } else if (action.type === TYPE_TEXT) {
            this._state.profilePage.newPostText = action.postMessage;
            this._callSubscribers();
        } else if (action.type === SEND_MESSAGE) {
            const newMessage = {
                id: this._state.dialogsPage.messages.length + 1,
                message: this._state.dialogsPage.newMessageText,
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscribers();
        } else if (action.type === TYPE_MESSAGE) {
            this._state.dialogsPage.newMessageText = action.textMessage;
            this._callSubscribers();
        }
    },
};

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const typeMessageActionCreator = (text) => ({
    type: TYPE_MESSAGE,
    textMessage: text,
});

export const addPostActionCreator = () => ({ type: ADD_POST });

export const typeTextActionCreator = (text) => ({
    type: TYPE_TEXT,
    postMessage: text,
});

export default store;
