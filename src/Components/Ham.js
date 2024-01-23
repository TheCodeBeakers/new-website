import React from 'react';
import ReactDOM from 'react-dom/client';
import Style from '../StyleSheets/Ham.module.css';
import { Link } from 'react-router-dom';

const Ham = () => {
    const toggleHam = () => {
        const hambtn = document.querySelector('.'+Style.hamBtn);
        const menu = document.querySelector('.'+Style.list);
        if (hambtn.getAttribute('isopen') == 1) {
            hambtn.setAttribute('isopen', '0');
            hambtn.innerText = 'O';
            menu.style.left = '0';
        } 
        else {
            hambtn.setAttribute('isopen', '1');
            hambtn.innerText = 'C';
            menu.style.left = '-100vw';
        }
    }
    return (
        <div>
            <div className={Style.hamBtn} onClick={toggleHam} isopen={1}>
                C
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
        </div>
    )
}

export default Ham;