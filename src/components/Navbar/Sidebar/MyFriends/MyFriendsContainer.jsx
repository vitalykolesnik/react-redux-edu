import React from 'react';
import MyFriends from './MyFriends';
import { connect } from 'react-redux';
import { getFriends } from 'redux/navReduser';

class MyFriendsContainer extends React.Component {
    componentDidMount() {
        this.props.getFriends();
    }

    render() {
        return <MyFriends {...this.props} />;
    }
}

const mapStateToProps = (state) => {
    return {
        friends: state.navBar.friends,
    };
};

export default connect(mapStateToProps, { getFriends })(MyFriendsContainer);
