import React from "react";
import "./InputLogin.css";

const InputLogin = (props) => {
    const labelInput = props.label;

    return (
        <div className="input-login-container shadow-default">
            <p>{labelInput}</p>
            <input
                className="input-login-style"
                type={props.type ? props.type : "text"}
                placeholder={props?.placeholder}
                id={props.id}
                name={props.name}     
                autoFocus={props?.autoFocus}
                maxLength={props.maxLength}
                value={props.value}
                onChange={props.onChange}
                onKeyUp={props.onKeyUp}
                onKeyDown={props.onKeyDown}
                label={props.label}
                aria-label={props.ariaLabel}                
                />
            {props.children}
        </div>
    )
}

export default InputLogin