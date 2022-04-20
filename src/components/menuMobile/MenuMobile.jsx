import React from "react";
import "./MenuMobile.css";

const MenuMobile = ()=>{
    return(
        <nav className="menu-mobile-nav">
            <ul className="menu-mobile-ul">
                <li><a className="menu-mobile-link" href="#" target="_self">Produtos</a></li>
                <li><a className="menu-mobile-link" href="#" target="_self">Sobre</a></li>
                <li><a className="menu-mobile-link" href="#" target="_self">Contato</a></li>
                <li><a className="menu-mobile-link" href="#" target="_self">Fotos</a></li>
            </ul>
        </nav>
    )
}
export default MenuMobile;