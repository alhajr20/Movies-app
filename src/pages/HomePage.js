import React, { Fragment } from 'react';
import requests from '../Requests';

import Header from '../components/header/Header';
import Promo from '../components/promo/Promo';
import Row from '../components/row/Row';

function HomePage() {
    return (
        <Fragment>
            <Header/>
            <Promo/>
            <Row
                title="Popular"
                url={requests.fetchPopular}
            />
            <Row
                title="Top Rated"
                url={requests.fetchTopRated}
            />
            <Row
                title="Action Movies"
                url={requests.fetchActionMovies}
            />
            <Row
                title="Comedy Movies"
                url={requests.fetchComedyMovies}
            />
            <Row
                title="Horror Movies"
                url={requests.fetchHorrorMovies}
            />
            <Row
                title="Romance Movies"
                url={requests.fetchRomanceMovies}
            />
            <Row
                title="Documentaries"
                url={requests.fetchDocumentaries}
            />
        </Fragment>
    )
};

export default HomePage;