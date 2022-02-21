import './HeaderStyle.css'
import logo from "./BABAL.svg"
const Header = () => {
    return (
        <header className="Header">
            <img className="logo" src={logo} alt="Logo" />
            <nav>
                <ul className="nav__links">
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </nav>
            <a className="cta" href="#"><button>Contact</button></a>
        </header>
    );
};

export default Header;
