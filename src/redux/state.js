import { rerenderEntireTree } from './../render';

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

const state = {
    profilePage: {
        posts,
        newPostText: 'Enter new post text...',
    },
    dialogsPage: {
        dialogs,
        messages,
    },
    navBar: {
        sideBar: {
            friends: dialogs,
        },
    },
};

export const addPost = (postMessage) => {
    const newPost = {
        id: state.profilePage.posts.length + 1,
        message: postMessage,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
};

export const typeText = (postMessage) => {
    state.profilePage.newPostText = postMessage;
    console.log(state.profilePage.newPostText);
    rerenderEntireTree(state);
};

export default state;
