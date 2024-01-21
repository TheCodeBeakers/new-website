import React from 'react';
import Style from '../StyleSheets/Mainhead.module.css'

function Mainhead() {
  return (
    <section id={Style.mainHead}>
        <div class={Style.headCont}>
            We are
            <span> The Code Breakers</span>
        </div>
        <div class={Style.ltgt}>
            &lt; / &gt;
        </div>
    </section>

  )
}

export default Mainhead;
