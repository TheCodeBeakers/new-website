import React from 'react';
import Style from '../StyleSheets/Mainhead.module.css'

function Details() {
  return (
    <section id={Style.about}>
        <div class={Style.leftAbout}>
            <div class={Style.LeftAboutCont}>
                About Us
            </div>
        </div> 
        <div class={Style.rightAbout}>
            <h1>What is TCB ?</h1>
            <p>
                The Code Breakers Club is a club of Shri Ramdeobaba College Of Engineering And Management, Nagpur, Maharashtra-440013. The Code Breakers Club comes under the Technical Club and has a speciality of <span>Programming languages</span>, <span>Competitive coding</span>,<span> Web Developement</span>,<span> IOT</span>, <span>AIML</span>, <span>Open Source Intelligence</span> and many more. The club is a SRC (Student's Representative Counsil) which is a student body ran by the current students studying in the college. The club organises many events for the college and represents RCOEM in different events held over All over India.
            </p>
        </div>
    </section>
  )
}

export default Details
