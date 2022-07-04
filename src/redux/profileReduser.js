const ADD_POST = 'ADD-POST';
const TYPE_TEXT = 'TYPE-TEXT';

const initialState = {
    posts: [
        {
            id: 1,
            text: 'How are you?',
            likeCount: 15,
        },
        {
            id: 2,
            text: "It's my first post",
            likeCount: 20,
        },
        {
            id: 3,
            text: 'New message',
            likeCount: 0,
        },
    ],
    newPostText: '',
};
const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: state.posts.length + 1,
                text: state.newPostText,
                likeCount: 0,
            };
            let stateCopy = { ...state };
            stateCopy.posts = [...state.posts, newPost]; //stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case TYPE_TEXT: {
            let stateCopy = { ...state };
            stateCopy.newPostText = action.postMessage;
            return stateCopy;
        }
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const typeTextActionCreator = (text) => ({
    type: TYPE_TEXT,
    postMessage: text,
});

export default profileReduser;
