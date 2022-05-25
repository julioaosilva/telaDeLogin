import React from "react";
import "./FormLogin.css";

const FormLogin = (props) => {
    return (
        <form className="form-login-container shadow-default" onSubmit={props.onSubmit}>
            <h1>Login</h1>
            {props.children}
        </form>
    )
}
export default FormLogin;