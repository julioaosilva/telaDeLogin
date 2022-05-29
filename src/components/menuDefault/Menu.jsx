import React from "react";
import "./Menu.css";

const Menu = ()=>{

    return(
        <nav className="menu-nav">
            <ul className="menu-ul">
                <li><a className="menu-link" href="#" target="_self">Produtos</a></li>
                <li><a className="menu-link" href="#" target="_self">Sobre</a></li>
                <li><a className="menu-link" href="#" target="_self">Contato</a></li>
                <li><a className="menu-link" href="#" target="_self">Fotos</a></li>
            </ul>
        </nav>
    )
}

export default Menu