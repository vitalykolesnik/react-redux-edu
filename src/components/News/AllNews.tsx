import {  Container, Grid, Typography } from '@mui/material';
import { NewsType } from 'components/types/types';
import React from 'react';
import News from './News';


type PropsType = {
    allPosts: Array<NewsType>
}

const AllNews: React.FC<PropsType> = ({ allPosts }) => {
    const newsElements = allPosts.map((p) => 
        <Grid item xs={12} sm={6} md={4} key={p.id}>
            <News {...p} key={p.id} />
        </Grid>
    );

    return (
        <Container sx={{mt:'5rem', mb: '3rem'}}>
            <Typography variant="h4" sx={{m: 2}}>News</Typography>
            <Grid container spacing={{xs: 1}}>
                {newsElements}
            </Grid>
        </Container>
    );
};

export default AllNews;
