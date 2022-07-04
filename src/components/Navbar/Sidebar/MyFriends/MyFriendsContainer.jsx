import MyFriends from './MyFriends';
import { connect } from 'react-redux';

// const MyFriendsContainer = (props) => {
//     const friendsElements = props.friends.map((f) => (
//         <Friend key={f.id} name={f.name} image={f.image} id={f.id} />
//     ));

//     return <div className={s.item}>{friendsElements}</div>;
// };

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
