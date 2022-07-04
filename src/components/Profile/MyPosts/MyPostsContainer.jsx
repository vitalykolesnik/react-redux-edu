import React from 'react';
import {
    addPostActionCreator,
    typeTextActionCreator,
} from '../../../redux/profileReduser';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
    let state = props.store.getState().profilePage;

    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    const enterPost = (text) => {
        let action = typeTextActionCreator(text);
        props.store.dispatch(action);
    };

    return (
        <MyPosts
            addPost={addPost}
            typeText={enterPost}
            posts={state.posts}
            newPostText={state.newPostText}
        />
    );
};

export default MyPostsContainer;
