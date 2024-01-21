import React from 'react';
import logo from '../Assets/tcblogo.jpg';
import Style from '../StyleSheets/Navbar.module.css';
import { Link } from 'react-router-dom';

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
                        <li><Link to={"/"} className={Style.active}>Home</Link></li>
                        <li><Link to={"/about"}>About</Link></li>
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