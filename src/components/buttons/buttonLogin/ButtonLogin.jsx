import React from "react";
import "./ButtonLogin.css";

const ButtonLogin = (props) => {
    return (
        <button className="button-login-style shadow-default" onClick={props?.onClick} >
            {props?.text}
        </button>
    )
}
export default ButtonLogin;