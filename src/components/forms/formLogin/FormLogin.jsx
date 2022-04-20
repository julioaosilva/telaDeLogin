import React from "react";
import "./FormLogin.css";

const FormLogin = (props) => {
    return (
        <div className="form-login-container shadow-default">
            <h1>Login</h1>
            {props.children}
        </div>
    )
}
export default FormLogin;