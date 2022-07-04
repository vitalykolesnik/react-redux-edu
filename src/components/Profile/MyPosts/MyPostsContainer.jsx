import { connect } from 'react-redux';
import {
    addPostActionCreator,
    typeTextActionCreator,
} from '../../../redux/profileReduser';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        postMessage: state.profilePage.postMessage,
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
