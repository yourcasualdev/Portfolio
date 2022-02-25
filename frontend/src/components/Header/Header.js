import './HeaderStyle.css'
import logo from "./BABAL.svg"

import { Link, useLocation } from "react-router-dom";
import { useState } from 'react';

const Header = () => {

    const page = useLocation().pathname.split('/')[1];
    const Pcolor = page === "projects" ? "rgba(0, 136, 169, 1)" : "white"
    const Hcolor = page === "" ? "rgba(0, 136, 169, 1)" : "white"
    const Acolor = page === "about" ? "rgba(0, 136, 169, 1)" : "white"
    return (
        <header className="Header">
            <nav>
                <ul className="nav__links">
                    <li><Link to="/" style={{ color: Hcolor }}>Home</Link></li>
                    <li><Link to="/projects" style={{ color: Pcolor }}>Projects</Link></li>
                    <li><Link to="/about" style={{ color: Acolor }}>About</Link></li>
                </ul>
            </nav>
            <a className="cta" href="mailto: babalibrahim34@gmail.com"><button>Contact</button></a>
        </header>
    );
};

export default Header;