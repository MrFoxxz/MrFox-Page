import React from 'react';
import './styles.scss';
import Bubble from "../../components/Bubble";

import Linkedin from "../../images/logos/Linkedin.png";
import Github from "../../images/logos/Github.png";
import Facebook from "../../images/logos/Facebook.png";
import Instagram from "../../images/logos/Instagram.png";
import Twich from "../../images/logos/Twich.png";
import WhatsApp from "../../images/logos/WhatsApp.png";

const Contact = props => {
    return (
        <section className="menu">
            <Bubble 
            logo={Linkedin}
            name="WhatsApp"
            link="https://www.linkedin.com/in/miguel-angel-jaimes-contreras-6aa8031b8/">
            </Bubble>

            <Bubble logo={Github}
            name="Github"
            link="https://github.com/MrFoxxz">
            </Bubble>

            <Bubble 
            logo={WhatsApp}
            name="WhatsApp"
            link="https://wa.link/a7165o">
            </Bubble>

            <Bubble 
            name="Facebook"
            logo={Facebook}
            link="https://www.facebook.com/miguel.a.contreras.1293">   
            </Bubble>

            <Bubble 
            name="Instagram"
            logo={Instagram}
            link="https://www.instagram.com/mr_foxzz/">
            </Bubble>

            <Bubble 
            name="Twich"
            logo={Twich}
            link="https://www.twitch.tv/mrfoxxzz">
            </Bubble>
        </section>
    );
};

export default Contact;