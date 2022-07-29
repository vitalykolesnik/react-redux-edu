import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    const postElements = props.posts.map((p) => (
        <Post
            {...p}
            key={p.id}
            isDeleting={props.isDeleting}
            onDeleteUserPost={props.deleteUserPost}
            profileId={props.profileId}
            userId={props.userId}
        />
    ));

    const onAddPost = () => {
        props.addUserPost();
    };

    const onEnterPost = (e) => {
        props.typeText(e.target.value);
    };

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            {props.profileId === props.userId ? (
                <div>
                    <div>
                        <textarea
                            onChange={onEnterPost}
                            value={props.postMessage}
                            placeholder="Enter your post..."
                        />
                    </div>
                    <div>
                        <button onClick={onAddPost} disabled={props.isAdding}>
                            Add post
                        </button>
                    </div>
                </div>
            ) : (
                ''
            )}
            <div className={s.posts}>{postElements}</div>
        </div>
    );
};

export default MyPosts;
