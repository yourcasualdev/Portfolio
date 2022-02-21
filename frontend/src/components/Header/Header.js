import './HeaderStyle.css'
import logo from "./BABAL.svg"

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="Header">
            <a href='/'><img className="logo" src={logo} alt="Logo" /></a>
            <nav>
                <ul className="nav__links">
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </nav>
            <a className="cta" href="#"><button>Contact</button></a>
        </header>
    );
};

export default Header;