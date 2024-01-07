import React from 'react';
import Style from '../StyleSheets/Quote.module.css'

const Quote = () => {
    return (
    < section className={Style.quote} >
        <div className={Style.quoteText}>
            {"</We code and Conquer>"}
        </div>
    </section >
    )
}

export default Quote;