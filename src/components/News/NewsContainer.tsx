import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getAllPosts } from '../../redux/profileSelectors';
import { requestAllPosts } from '../../redux/profileReduser';
import AllNews from './AllNews';
import { AppStateType } from 'redux/reduxStore';
import { NewsType } from 'components/types/types';

type MapStatePropsType = {
    allPosts: Array<NewsType>
};

type MapDispatchPropsType = {
    requestAllPosts: () => void
};

type OwnPropsType = {
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType
type StateType = {}

class NewsContainer extends React.PureComponent<PropsType, StateType>{
    componentDidMount() {
        this.props.requestAllPosts();
    }
    render() {
        return <AllNews allPosts={this.props.allPosts} />;
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        allPosts: getAllPosts(state),
    };
};

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
        mapStateToProps, {
        requestAllPosts,
    })
)(NewsContainer);
