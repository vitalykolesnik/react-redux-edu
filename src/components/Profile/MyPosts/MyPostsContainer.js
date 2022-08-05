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

class MyPostsContainer extends React.PureComponent {
    componentDidMount() {
        let { profileId, requestUserPosts } = this.props;
        requestUserPosts(profileId);
    }

    componentDidUpdate(prevProps) {
        let { profileId, requestUserPosts } = this.props;
        if (prevProps.profileId !== profileId) {
            requestUserPosts(profileId);
        }
    }

    // PureComponent execute
    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps !== this.props || nextState !== this.state;
    // }

    addUserPost() {
        let { addUserPost, postMessage } = this.props;
        addUserPost(postMessage);
    }

    executeDeleteUserPost(id) {
        let { deleteUserPost } = this.props;
        deleteUserPost(id);
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
