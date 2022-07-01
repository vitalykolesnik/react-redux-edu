import React from 'react';
import {
    addPostActionCreator,
    typeTextActionCreator,
} from './../../../redux/profileReduser';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    const postElements = props.posts.map((p) => (
        <Post key={p.id} text={p.text} likeCount={p.likeCount} />
    ));

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    const enterPost = (e) => {
        let text = e.target.value;
        props.dispatch(typeTextActionCreator(text));
    };

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={enterPost}
                        value={props.newPostText}
                        placeholder="Enter your post..."
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
