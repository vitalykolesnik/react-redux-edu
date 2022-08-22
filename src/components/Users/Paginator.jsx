import React from 'react';
import s from './Paginator.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
    getCurrentPage,
    getPageSize,
    getTotalUsersCount,
} from 'redux/usersSelectors';
import { requestUsersPage } from 'redux/usersReduser';

const Paginator = () => {
    const totalUsersCount = useSelector((state) => getTotalUsersCount(state));
    const pageSize = useSelector((state) => getPageSize(state));
    const currentPage = useSelector((state) => getCurrentPage(state));
    const dispatch = useDispatch();

    let pageCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    let onPageChanged = (pageNumber) => {
        dispatch(requestUsersPage(pageNumber, pageSize));
    };

    return (
        <div className={s.pagination}>
            {pages.map((p, i) => {
                return (
                    <span
                        className={currentPage === p ? s.selectedPage : ''}
                        onClick={() => onPageChanged(p)}
                        key={i}
                    >
                        {' '}
                        {p}{' '}
                    </span>
                );
            })}
        </div>
    );
};
export default Paginator;
