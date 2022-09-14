import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getPageSize,
    getCurrentPage,
    getTotalUsersCount,
} from '../../redux/usersSelectors';
import { requestCurrentPage } from '../../redux/usersReduser';
import { AppStateType } from '../../redux/reduxStore';

import { Pagination } from '@mui/material';

const Paginator: React.FC = () => {
    const totalUsersCount: number = useSelector((state: AppStateType) => getTotalUsersCount(state));
    const pageSize: number = useSelector((state: AppStateType) => getPageSize(state));
    const currentPage: number = useSelector((state: AppStateType) => getCurrentPage(state));
    const dispatch: any = useDispatch();

    let pageCount: number = Math.ceil(totalUsersCount / pageSize);

    const onPageChanged = (e: React.ChangeEvent<unknown>, value: number) => {
        dispatch(requestCurrentPage(value))
    }

    return (
        <Pagination count={pageCount} page={currentPage} onChange={onPageChanged} showFirstButton showLastButton sx={{width: 'auto' , m:2}}/>
    )

};
export default Paginator;
