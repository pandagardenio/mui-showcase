import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';

import config from '../../config';
import AlbumCard from './AlbumCard';

function Album() {
    const [pictures, setPictures] = useState([]);
    useEffect(() => {
        fetch(config.apiUrl + '/pictures')
            .then(response => response.json())
            .then(data => setPictures(data));
    }, []);

    return (
        <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
                {pictures.map(picture => (
                    <Grid item xs={12} sm={6} md={4}>
                        <AlbumCard picture={picture}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Album;
