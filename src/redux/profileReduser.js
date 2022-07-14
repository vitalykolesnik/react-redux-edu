const ADD_POST = 'ADD-POST';
const TYPE_TEXT = 'TYPE-TEXT';
const SELECT_PROFILE = 'SELECT_PROFILE';

const initialState = {
    profileId: 2,
    profile: {},
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
    postMessage: '',
};

const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: state.posts.length + 1,
                text: state.postMessage,
                likeCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                postMessage: '',
            };
        }
        case TYPE_TEXT: {
            return { ...state, postMessage: action.postMessage };
        }
        case SELECT_PROFILE: {
            return { ...state, profile: action.profile };
        }
        default:
            return state;
    }
};

export const addPost = () => ({ type: ADD_POST });

export const typeText = (text) => ({
    type: TYPE_TEXT,
    postMessage: text,
});

export const setUserProfile = (profile) => ({
    type: SELECT_PROFILE,
    profile,
});

export default profileReduser;
