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
        this.props.getUserPosts(this.props.profileID);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.profileID !== this.props.profileID) {
            this.props.getUserPosts(this.props.profileID);
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
        userID: state.auth.userId,
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
