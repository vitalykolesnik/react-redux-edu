import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from 'utils/validators';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { TextArea } from './../../other/FormsControls/FormsControl';

const maxLength30 = maxLengthCreator(30);

const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name="newPost"
                    placeholder="Enter your post..."
                    component={TextArea}
                    validate={[required, maxLength30]}
                />
            </div>
            <div>
                <button disabled={props.isAdding}>Add post</button>
            </div>
        </form>
    );
};
const NewPostFormRedux = reduxForm({ form: 'addNewPost' })(NewPostForm);

const MyPosts = (props) => {
    const postElements = props.posts.map((p) => (
        <Post
            {...p}
            key={p.id}
            likes={p.likes}
            isDeleting={props.isDeleting}
            onDeleteUserPost={props.deleteUserPost}
            isOwner={props.isOwner}
        />
    ));

    const onAddPost = (post) => {
        props.addUserPost(post);
    };

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            {props.isOwner ? <NewPostFormRedux onSubmit={onAddPost} /> : ''}
            <div className={s.posts}>{postElements}</div>
        </div>
    );
};

export default MyPosts;
