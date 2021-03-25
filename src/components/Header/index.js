import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

import Logo from '../../assets/MrFoxLogo.png'

const Header = props => {
    return(
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="MrFox Logo" />
                    </Link>
                </div>

            </div>
        </header>
    );
};

export default Header;