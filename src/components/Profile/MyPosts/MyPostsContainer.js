import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
    typeText,
    addUserPost,
    deleteUserPost,
    getUserPosts,
} from '../../../redux/profileReduser';
import MyPosts from './MyPosts';

class MyPostsContainer extends React.Component {
    componentDidMount() {
        this.props.getUserPosts(this.props.profileId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.profileId !== this.props.profileId) {
            this.props.getUserPosts(this.props.profileId);
        }
    }

    addUserPost() {
        this.props.addUserPost(this.props.postMessage);
    }

    executeDeleteUserPost(id) {
        this.props.deleteUserPost(id);
    }

    render() {
        return (
            <MyPosts
                {...this.props}
                addUserPost={this.addUserPost.bind(this)}
                deleteUserPost={this.executeDeleteUserPost.bind(this)}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        isAdding: state.profilePage.isAdding,
        isDeleting: state.profilePage.isDeleting,
        posts: state.profilePage.posts,
        postMessage: state.profilePage.postMessage,
    };
};

export default compose(
    connect(mapStateToProps, {
        addUserPost,
        deleteUserPost,
        typeText,
        getUserPosts,
    })
)(MyPostsContainer);
