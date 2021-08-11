import React from 'react';

function Popular() {
    return (
        <section className="popular">
            <div className="container">
                <h2 className="popular__title">Popular</h2>
                <div className="popular__wrapper">
                    <div className="popular__item">
                        <img src="https://img03.rl0.ru/afisha/e336x480q65i/s2.afisha.ru/mediastorage/9e/d6/3181da71565b4abd80f79ddbd69e.jpg" alt="popular image" />
                        <div className="popular__item-more">
                            <a href="#"><ion-icon name="information-circle-outline"></ion-icon> More Info</a>
                        </div>
                    </div>
                    <div className="popular__item">
                        <img src="https://img09.rl0.ru/afisha/e336x480q65i/s.afisha.ru/mediastorage/d6/bf/d8be376111664ee1925c5bd6bfd6.jpg" />
                        <div className="popular__item-more">
                            <a href="#"><ion-icon name="information-circle-outline"></ion-icon> More Info</a>
                        </div>
                    </div>
                    <div className="popular__item">
                        <img src="https://img09.rl0.ru/afisha/e336x480q65i/s1.afisha.ru/mediastorage/25/1b/140393315d8844179f2692231b25.jpg" alt="popular image" />
                        <div className="popular__item-more">
                            <a href="#"><ion-icon name="information-circle-outline"></ion-icon> More Info</a>
                        </div>
                    </div>
                    <div className="popular__item">
                        <img src="https://img02.rl0.ru/afisha/e336x480q65i/s5.afisha.ru/mediastorage/16/3e/6c5330e03e734b9d984d74073e16.jpg" alt="popular image" />
                        <div className="popular__item-more">
                            <a href="#"><ion-icon name="information-circle-outline"></ion-icon> More Info</a>
                        </div>
                    </div>
                    <div className="popular__item">
                        <img src="https://img08.rl0.ru/afisha/e336x480q65i/s.afisha.ru/mediastorage/11/3f/acc43d9c9dd24e28a4827d7c3f11.jpg" alt="popular image" />
                        <div className="popular__item-more">
                            <a href="#"><ion-icon name="information-circle-outline"></ion-icon> More Info</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Popular;