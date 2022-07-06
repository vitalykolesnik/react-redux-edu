import React from 'react';
import s from './UsersPage.module.css';
import User from './User/User';
import axios from 'axios';

const UsersPage = (props) => {
    const users = props.usersPage.users.map((u) => (
        <User
            id={u.id}
            key={u.id}
            name={u.name}
            description={u.description}
            subscribed={u.subscribed}
            subscribe={props.subscribe}
            unsubscribe={props.unsubscribe}
        />
    ));

    const setUsers = () => {
        if (!props.usersPage.users.length) {
            axios.get('http://localhost:5000/users').then((res) => {
                props.setUsers(res.data.users);
            });
        }
    };

    return (
        <div className={s.container}>
            <button onClick={setUsers}>Show all</button>
            <div className={s.usersPage}>{users}</div>
        </div>
    );
};

export default UsersPage;
