import React from 'react';
import {Link} from 'react-router-dom'
import Fox from '../../assets/MrFoxLogo.png'
import './styles.scss'

const Homepage = () => {
    return (
        <section className="homepage">
            <div class="container">
                <ul id="menu">
                
                    <a class="menu-button icon-plus" href="#menu" title="Show navigation">
                        <img className="foximg" src={Fox} alt="Fox"></img>
                    </a>
                    <a class="menu-button icon-minus" href="#0" title="Hide navigation">
                        <img className="foximg" src={Fox} alt="Fox"></img>
                    </a>

                    <li class="menu-item clickme">
                        <h4 class="click">Click_Me</h4>
                        <h4 class="touch">Touch_Me</h4>
                    </li>
                    
                    <li class="menu-item">
                        <Link  to="/Portfolio">
                            <a class="nav-link" href="/Portfolio">Portafolio</a>
                        </Link>
                    </li>
                    <li class="menu-item">
                        <Link  to="/Allies">
                            <a class="nav-link" href="/Allies">Aliados</a>
                        </Link>
                    </li>
                    <li class="menu-item">
                        <Link  to="/Contacts">
                            <a class="nav-link" href="/Contacts">Contactos</a>
                        </Link>
                    </li>
                    <li class="menu-item">
                        <Link  to="/AboutMe">
                            <a class="nav-link" href="/AboutMe">Sobre_Mi</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Homepage;