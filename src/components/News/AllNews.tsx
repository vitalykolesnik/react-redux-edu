import { NewsType } from 'components/types/types';
import React from 'react';
import News from './News';

import s from './News.module.css';

type PropsType = {
    allPosts: Array<NewsType>
}

const AllNews: React.FC<PropsType> = ({ allPosts }) => {
    const newsElements = allPosts.map((p) => <News {...p} key={p.id} />);
    return (
        <div className={s.news}>
            <h3>News</h3>
            <div className={s.allNews}>{newsElements}</div>
        </div>
    );
};

export default AllNews;
