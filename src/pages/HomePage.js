import React, { Fragment } from 'react';

import Header from '../components/header/Header';
import Promo from '../components/promo/Promo';
import Popular from '../components/popular/Popular';

function HomePage() {
    return (
        <Fragment>
            <Header/>
            <Promo/>
            <Popular/>
        </Fragment>
    )
};

export default HomePage;