import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    const postElements = props.posts.map((p) => (
        <Post key={p.id} text={p.text} likeCount={p.likeCount} />
    ));

    const onAddPost = () => {
        props.addPost();
    };

    const onEnterPost = (e) => {
        props.typeText(e.target.value);
    };

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onEnterPost}
                        value={props.newPostText}
                        placeholder="Enter your post..."
                    />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>{postElements}</div>
        </div>
    );
};

export default MyPosts;
