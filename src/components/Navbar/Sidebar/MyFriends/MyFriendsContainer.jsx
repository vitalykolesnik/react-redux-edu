import MyFriends from './MyFriends';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        friends: state.navBar.sideBar.friends,
    };
};

const mapDispatchToProps = () => {
    return {};
};

const MyFriendsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyFriends);

export default MyFriendsContainer;
