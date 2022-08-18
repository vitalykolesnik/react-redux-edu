import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
    getIsAdding,
    getIsDeleting,
    getPosts,
} from '../../../redux/profileSelectors';
import {
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

    addUserPost(post) {
        this.props.addUserPost(post);
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
        posts: getPosts(state),
        isAdding: getIsAdding(state),
        isDeleting: getIsDeleting(state),
    };
};

export default compose(
    connect(mapStateToProps, {
        addUserPost,
        deleteUserPost,
        requestUserPosts,
    })
)(MyPostsContainer);
