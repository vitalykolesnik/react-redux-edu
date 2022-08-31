import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getCurrentPage,
    getPageSize,
    getTotalUsersCount,
} from '../../redux/usersSelectors';
import { requestUsersPage } from '../../redux/usersReduser';
import { AppStateType } from '../../redux/reduxStore';

import s from './Paginator.module.css';

type PropsType = {}

const Paginator: React.FC<PropsType> = () => {
    const totalUsersCount : number = useSelector((state: AppStateType) => getTotalUsersCount(state));
    const pageSize : number = useSelector((state: AppStateType) => getPageSize(state));
    const currentPage : number = useSelector((state: AppStateType) => getCurrentPage(state));
    const dispatch: any = useDispatch();

    let pageCount: number = Math.ceil(totalUsersCount / pageSize);

    let pages: Array<number> = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    let onPageChanged = (pageNumber: number) => {
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
