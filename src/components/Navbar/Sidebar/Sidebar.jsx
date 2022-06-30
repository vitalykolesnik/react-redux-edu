import React from 'react';
import s from './Sidebar.module.css';
import MyFriends from './MyFriends/MyFriends';

const Sidebar = (props) => {
    return (
        <nav className={s.sidebar}>
            <h3>My friends</h3>
            <MyFriends friends={props.sideBar.friends} />
        </nav>
    );
};

export default Sidebar;
