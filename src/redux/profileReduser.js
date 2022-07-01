const ADD_POST = 'ADD-POST';
const TYPE_TEXT = 'TYPE-TEXT';

const profileReduser = (state, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: state.posts.length + 1,
                text: state.newPostText,
                likeCount: 0,
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        }
        case TYPE_TEXT: {
            state.newPostText = action.postMessage;
            return state;
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
