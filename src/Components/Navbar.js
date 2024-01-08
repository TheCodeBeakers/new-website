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
                        <span className={Style.img_text}> TheCodeBreakers </span>
                    </div>
                </div>
                <nav >
                    <ul className={Style.list}>
                        <li><a href="" className={Style.active}>Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Achievements</a></li>
                        <li><a href="">Events</a></li>
                        <li><a href="">Others</a></li>
                    </ul>
                </nav>
                
                <ham />
            </div>
        </header>
    )
}


export default NavBar;