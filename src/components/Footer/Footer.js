import './FooterStyle.css'
import { IconContext } from 'react-icons';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className='footer'>
            <IconContext.Provider value={{ color: 'blue', size: '30px' }}>
                <div className='icons'>
                    <a href="https://github.com/Nightvision53"><AiFillGithub /></a>
                    <a href="https://www.linkedin.com/in/ibrahimbabal/"><AiFillLinkedin /></a>
                    <a href="https://www.instagram.com/ibrahim.babal.34/"><AiFillInstagram /></a>



                </div>
            </IconContext.Provider>
        </footer>
    );
};

export default Footer;
