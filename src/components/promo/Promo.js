import React from 'react';

function Promo() {
    return (
        <section 
            className="promo"
            style={{background: `url('https://i.ytimg.com/vi/PaPXXQX8R1U/maxresdefault.jpg') center center/cover no-repeat`}}>
            <div className="container">
                <div className="promo__wrapper">
                    <h1>Black Widow</h1>

                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat est suscipit quas autem blanditiis consectetur saepe, rerum ratione accusantium odit sunt reiciendis modi! Voluptatem, laudantium sint vero placeat unde labore?
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