import React from "react";
import "./FormLogin.css";

const FormLogin = ({onSubmit, children}) => {
    return (
        <form className="form-login-container shadow-default" onSubmit={onSubmit}>
            <h1>Login</h1>
            {children}
        </form>
    )
}

export default FormLogin