import React from 'react';
import s from './MyPosts.module.css';
import * as Yup from 'yup';
import Post from './Post/Post';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { addUserPost } from 'redux/profileReduser';

const NewPostForm = (props) => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            newPostText: '',
        },
        onSubmit: () => {
            dispatch(addUserPost(formik.values));
            formik.values.newPostText = '';
        },
        validationSchema: Yup.object({
            newPostText: Yup.string()
                .max(15, 'Must be 15 chars or less')
                .required('Required'),
        }),
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <textarea
                id="newPostText"
                name="newPostText"
                className={formik.errors.newPostText ? s.errorArea : ''}
                placeholder="Enter your post..."
                value={formik.values.newPostText}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
            />
            <button type="submit" disabled={props.isAdding}>
                Add post
            </button>
            <div className={formik.errors ? s.errorMessage : ''}>
                {formik.errors ? formik.errors.newPostText : null}
            </div>
        </form>
    );
};

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

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            {props.isOwner ? <NewPostForm /> : ''}
            <div className={s.posts}>{postElements}</div>
        </div>
    );
};

export default MyPosts;
