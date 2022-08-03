import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getUserId } from '../../../redux/authSelectors';
import {
    getIsAdding,
    getIsDeleting,
    getPostMessage,
    getPosts,
} from '../../../redux/profileSelectors';
import {
    typeText,
    addUserPost,
    deleteUserPost,
    requestUserPosts,
} from '../../../redux/profileReduser';
import MyPosts from './MyPosts';

class MyPostsContainer extends React.Component {
    componentDidMount() {
        this.props.requestUserPosts(this.props.profileId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.profileId !== this.props.profileId) {
            this.props.requestUserPosts(this.props.profileId);
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
        userId: getUserId(state),
        isAdding: getIsAdding(state),
        isDeleting: getIsDeleting(state),
        posts: getPosts(state),
        postMessage: getPostMessage(state),
    };
};

export default compose(
    connect(mapStateToProps, {
        addUserPost,
        deleteUserPost,
        typeText,
        requestUserPosts,
    })
)(MyPostsContainer);
