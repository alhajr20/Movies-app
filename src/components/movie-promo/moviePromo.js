import React, {useState, useEffect} from 'react';

const IMG = 'https://image.tmdb.org/t/p/w500/';

function MoviePromo() {
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
        <section className="movie-promo">
            <div 
                className="movie-promo__wrapper"
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url('${IMG+movie?.backdrop_path}')`,
                    backgroundPosition: "center center"
                }}
            >
                <div className="container">
                    <div className="movie-promo__inner">
                        <div className="movie-promo__poster">
                            <button className="play">
                                <ion-icon name="play-circle-outline"></ion-icon>
                            </button>
                            <img src={IMG+movie.poster_path} alt="movie poster" />
                        </div>

                        <div className="movie-promo__info">
                            <h1>{movie.title}</h1>
                            <p>
                                {movie.tagline}
                            </p>
                            <span className={`${movie.vote_average >= 7 ? 'green' : movie.vote_average < 7 ? 'yellow' : 'red'}`}>{movie.vote_average}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    ) 
}

export default MoviePromo;