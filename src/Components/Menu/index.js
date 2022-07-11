import React from "react";
import Logo from '../../assets/img/Logo.png';
import {MenuWraper} from "./styles";
import {LogoImage} from "./styles";
import {ButtonLink} from "./styles";

function Menu(){
    return (
        <MenuWraper className="Menu">
            <a href="/">
                <LogoImage src={Logo} alt="Logo do site" />
            </a>
            <ButtonLink as='a' className="ButtonLink" href="/">
                Novo Vídeo
            </ButtonLink>
        </MenuWraper>
    )
}

export default Menu