import React, {useState, useEffect} from 'react';

const IMG = 'https://image.tmdb.org/t/p/original/';

function Row({title, url}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await fetch(url);
            const data = await request.json();

            setMovies(data.results.slice(0, 5));
            
            return data;
        }

        fetchData();
    }, []);

    console.log(movies);

    return (
        <section className="row">
            <div className="container">
                <h2 className="row__title">{title}</h2>
                <div className="row__wrapper">
                    {
                        movies.map((item, i) => (
                            <div key={i} className="row__item">
                                <img src={IMG+item.poster_path} alt={item.title} />
                                <div className="row__item-more">
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

export default Row;