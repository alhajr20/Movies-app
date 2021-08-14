import React, {useState, useEffect} from 'react';
import requests from '../../Requests';

const IMG = 'https://image.tmdb.org/t/p/original/';
const url = `https://api.themoviedb.org/3/`;

function Popular() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await fetch(url+requests.fetchPopular);
            const data = await request.json();

            setMovies(data.results);
            
            return data;
        }

        fetchData();
    }, []);

    console.log(movies);

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