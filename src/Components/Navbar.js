import React from 'react';
import logo from '../Assets/tcblogo.jpg';

import Style from '../StyleSheets/Navbar.module.css';

const NavBar = () => {

    return(
        <header>
            <div className={Style.headContent}>
                <div className={Style.logoCont}>
                    <div className={Style.logo}>
                        <img src={logo} alt="TCB Logo" />
                        TheCodeBreakers
                    </div>
                </div>
                <nav >
                    <ul>
                        <li><a href="" className={Style.active}>Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Achievements</a></li>
                        <li><a href="">Events</a></li>
                        <li><a href="">Others</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}


export default NavBar;