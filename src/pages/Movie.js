import React, { Fragment, useState, useEffect } from 'react';

import MoviePromo from '../components/movie-promo/moviePromo';

const IMG = 'https://image.tmdb.org/t/p/w500/';

function Movie() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await fetch(`https://api.themoviedb.org/3/movie/${window.location.href.split('movie/')[1]}?api_key=10f6488514e68084fc563f516e9d780a`);
            const data = await request.json();

            setMovie(data);
            
            return data;
        }

        fetchData();
    }, []);

    return (
        <Fragment>
            <MoviePromo movie={movie} />
        </Fragment>
    );
}

export default Movie;