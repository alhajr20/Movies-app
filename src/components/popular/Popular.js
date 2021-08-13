import React, {useState, useEffect} from 'react';

const IMG = 'https://image.tmdb.org/t/p/w500/';
const API_KEY = '10f6488514e68084fc563f516e9d780a';
const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;

function Popular() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(data => data.json())
            .then(res => setMovies(res.results));
    }, []);

    return (
        <section className="popular">
            <div className="container">
                <h2 className="popular__title">Popular</h2>
                <div className="popular__wrapper">
                    {
                        movies.map((item, i) => (
                            <div key={i} className="popular__item">
                                <img src={IMG+item.poster_path} alt="popular image" />
                                <div className="popular__item-more">
                                    <a href="#"><ion-icon name="information-circle-outline"></ion-icon> More Info</a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Popular;