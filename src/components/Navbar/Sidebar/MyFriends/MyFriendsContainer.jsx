import React from 'react';
import MyFriends from './MyFriends';
import { connect } from 'react-redux';
import { setFriends } from 'redux/navReduser';
import { usersAPI } from 'api/api';

class MyFriendsContainer extends React.Component {
    componentDidMount() {
        usersAPI.getUsers(1, 10).then((data) => {
            this.props.setFriends(data.users);
        });
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

export default connect(mapStateToProps, { setFriends })(MyFriendsContainer);
