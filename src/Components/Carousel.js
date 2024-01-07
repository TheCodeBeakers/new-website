import React from 'react';
import Style from '../StyleSheets/Carousel.module.css';

const Carousel = () => {

    return(
        <section id={Style.main}>            
            <div className={Style.slideWrap}>
                <div className={Style.slide1}>
                    <div className={Style.mainHead}>
                        <h1>The Code Breakers</h1>
                        <p>Breaking Codes, Building minds</p>
                    </div>
                </div>
                <div className={Style.slide2}></div>
                <div className={Style.slide3}></div>
            </div>
            <div className={Style.slider}>
                <div className={Style.dots}></div>
                <div className={Style.dots}></div>
                <div className={Style.dots}></div>
            </div>
        </section>
    )
}

export default Carousel;