import React, {useState, useEffect} from 'react';
import requests from '../../Requests';

const IMG = 'https://image.tmdb.org/t/p/w500/';
const API_KEY = '10f6488514e68084fc563f516e9d780a';
const url = `https://api.themoviedb.org/3/`;

function Promo() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await fetch(url+requests.fetchPopular);
            const data = await request.json();
            setMovie(
                data.results[
                    Math.floor(Math.random() * data.results.length - 1)
                ]
            );
            return data;
        }

        fetchData();
    }, []);

    return (
        <section 
            className="promo"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url('${IMG+movie?.backdrop_path}')`,
                backgroundPosition: "center center"
            }}
        >
            <div className="container">
                <div className="promo__wrapper">
                    <h1>{movie.title}</h1>

                    <p>
                        {movie.overview}
                    </p>

                    <div className="links">
                        <a href="#">
                            <ion-icon name="play-circle-outline"></ion-icon>
                            Play
                        </a>
                        <a href="#">
                            <ion-icon name="information-circle-outline"></ion-icon>
                            More info
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Promo;