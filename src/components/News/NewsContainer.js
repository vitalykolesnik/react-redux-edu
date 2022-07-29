import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getAllPosts } from './../../redux/profileReduser';
import AllNews from './AllNews';

class NewsContainer extends React.Component {
    componentDidMount() {
        this.props.getAllPosts();
    }

    render() {
        return <AllNews {...this.props} />;
    }
}

const mapStateToProps = (state) => {
    return {
        allPosts: state.profilePage.allPosts,
    };
};

export default compose(
    connect(mapStateToProps, {
        getAllPosts,
    })
)(NewsContainer);
