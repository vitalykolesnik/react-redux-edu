import React from 'react';
import MyFriendsContainer from './MyFriends/MyFriendsContainer';
import s from './Sidebar.module.css';

const Sidebar = (props) => {
    return (
        <nav className={s.sidebar}>
            <h3>My friends</h3>
            <MyFriendsContainer store={props.store} />
        </nav>
    );
};

export default Sidebar;
