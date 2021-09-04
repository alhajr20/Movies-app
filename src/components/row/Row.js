import React, {useState, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.scss';

const IMG = 'https://image.tmdb.org/t/p/original/';

function Row({title, url}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await fetch(url);
            const data = await request.json();

            setMovies(data.results);
            
            return data;
        }

        fetchData();
    }, []);

    console.log(movies);

    return (
        <section className="row">
            <div className="container">
                <h2 className="row__title">{title}</h2>
                <Swiper 
                    className="row__wrapper"
                    spaceBetween={10}
                    slidesPerView={7}    
                >
                    {
                        movies.map((item, i) => (
                            <SwiperSlide key={i} className="row__item">
                                <img src={IMG+item.poster_path} alt={item.title} />
                                <div className="row__item-more"
                                    style={{
                                        backgroundSize: "cover",
                                        backgroundImage: `url('${IMG+item.backdrop_path}')`,
                                        backgroundPosition: "center center"
                                    }}
                                >
                                    <h3>{item.title}</h3>
                                    <span className={`${item.vote_average >= 7 ? 'green' : item.vote_average < 7 ? 'yellow' : 'red'}`}>{item.vote_average}</span>
                                    <p>
                                        {item.overview}
                                    </p>
                                    <Link to={`/movie/${item.id}`}><ion-icon name="information-circle-outline"></ion-icon> More info</Link>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    );
}

export default Row;