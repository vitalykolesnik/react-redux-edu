import React from 'react';
import News from './News';
import s from './News.module.css';

const AllNews = ({ allPosts }) => {
    const newsElements = allPosts.map((p) => <News {...p} key={p.id} />);
    return (
        <div className={s.news}>
            <h3>News</h3>
            <div className={s.allNews}>{newsElements}</div>
        </div>
    );
};

export default AllNews;
