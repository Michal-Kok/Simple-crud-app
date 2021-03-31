import React from 'react';
import '../assets/style/Footer.scss';
import { ReactComponent as Logo } from '../assets/image/Logo.svg';

const Footer = () => {
    return (
        <div className="footer">
            <p className="footer__text">
                Powered by:
            </p>
            <div className="footer__svgContainer">
                < Logo />
            </div>
        </div>
    );
}

export default Footer;