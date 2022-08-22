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
            img: null,
        },
        onSubmit: () => {
            dispatch(addUserPost(formik.values));
            formik.values.newPostText = '';
        },
        validationSchema: Yup.object({
            newPostText: Yup.string().max(100, 'Must be 100 chars or less'),
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
            <input
                name="image"
                type="file"
                placeholder="Place your image..."
                multiple
                onChange={(e) => {
                    formik.values.img = e.currentTarget.files;
                }}
            />
            <button type="submit" disabled={props.isAdding}>
                Add post
            </button>
            <div className={formik.errors ? s.errorMessage : ''}>
                {formik.errors ? formik.errors.newPostText : ''}
            </div>
        </form>
    );
};

const MyPosts = ({ posts, isOwner, isDeleting, deleteUserPost }) => {
    const postElements = posts.map((p) => (
        <Post
            {...p}
            key={p.id}
            likes={p.likes}
            images={p.images}
            isDeleting={isDeleting}
            onDeleteUserPost={deleteUserPost}
            isOwner={isOwner}
        />
    ));

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            {isOwner ? <NewPostForm /> : ''}
            <div className={s.posts}>{postElements}</div>
        </div>
    );
};

export default React.memo(MyPosts);
