import React from "react";
import Logo from '../../assets/img/Logo.png'

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo do site" />
            </a>
            <a className="ButtonLink" href="/">Novo Vídeo</a>
        </nav>
    )
}

export default Menu