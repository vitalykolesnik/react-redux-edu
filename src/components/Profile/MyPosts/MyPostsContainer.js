import { connect } from 'react-redux';
import { addPost, typeText } from '../../../redux/profileReduser';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        postMessage: state.profilePage.postMessage,
    };
};

const MyPostsContainer = connect(mapStateToProps, { addPost, typeText })(
    MyPosts
);

export default MyPostsContainer;
