import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
    getIsDeleting,
    getPosts,
} from '../../../redux/profileSelectors';
import {
    requestUserPosts,
} from '../../../redux/profileReduser';
import MyPosts from './MyPosts';
import { AppStateType } from 'redux/reduxStore';
import { PostType } from 'components/types/types';

type MapStatePropsType = {
    posts: Array<PostType>
    isDeleting: Array<number>
};

type MapDispatchPropsType = {
    requestUserPosts: (userId: number) => void
};

type OwnPropsType= {
    profileId: number | null
    isOwner: boolean
}

type PropsType = OwnPropsType & MapStatePropsType & MapDispatchPropsType 
type StateType = {}

class MyPostsContainer extends React.PureComponent<PropsType, StateType> {
    componentDidMount() {
        let { profileId, requestUserPosts } = this.props;
        if(profileId) requestUserPosts(profileId);
    }

    componentDidUpdate(prevProps: PropsType) {
        let { profileId, requestUserPosts } = this.props;
        if(profileId) {
            if (prevProps.profileId !== profileId) {
                requestUserPosts(profileId);
            }
        }
    }

    render() {
        return (
            <MyPosts
                posts={this.props.posts}
                isDeleting={this.props.isDeleting}
                isOwner={this.props.isOwner}
            />
        );
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        posts: getPosts(state),
        isDeleting: getIsDeleting(state),
    };
};

export default compose(
    connect(mapStateToProps, {
        requestUserPosts,
    })
)(MyPostsContainer);
