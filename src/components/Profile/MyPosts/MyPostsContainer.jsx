import { connect } from 'react-redux';
import {
    addPostActionCreator,
    typeTextActionCreator,
} from '../../../redux/profileReduser';
import MyPosts from './MyPosts';

// const MyPostsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState().profilePage;

//                 const addPost = () => {
//                     store.dispatch(addPostActionCreator());
//                 };

//                 const enterPost = (text) => {
//                     let action = typeTextActionCreator(text);
//                     store.dispatch(action);
//                 };

//                 return (
//                     <MyPosts
//                         addPost={addPost}
//                         typeText={enterPost}
//                         posts={state.posts}
//                         newPostText={state.newPostText}
//                     />
//                 );
//             }}
//         </StoreContext.Consumer>
//     );

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.newPostText,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        typeText: (text) => {
            dispatch(typeTextActionCreator(text));
        },
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
