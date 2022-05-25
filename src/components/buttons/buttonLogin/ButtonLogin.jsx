import React from "react";
import "./ButtonLogin.css";

const ButtonLogin = ({onClick, onKeyDown, text }) => {
    return (
        <button className="button-login-style shadow-default" onClick={onClick} onKeyDown={onKeyDown}>
            {text}
        </button>
    )
}
export default ButtonLogin;