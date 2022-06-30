import React from 'react';
import {
    addPostActionCreator,
    typeTextActionCreator,
} from './../../../redux/store';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    const postElements = props.posts.map((p) => (
        <Post key={p.id} message={p.message} likeCount={p.likeCount} />
    ));

    const newPostElement = React.createRef();

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    const enterPost = () => {
        props.dispatch(typeTextActionCreator(newPostElement.current.value));
    };

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={enterPost}
                        ref={newPostElement}
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>{postElements}</div>
        </div>
    );
};

export default MyPosts;
