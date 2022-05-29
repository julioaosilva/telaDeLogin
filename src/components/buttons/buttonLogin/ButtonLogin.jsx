import React from 'react';
import './ButtonLogin.css';

const ButtonLogin = ({onClick, onKeyDown, text, type }) => {
    return (
        <button className='button-login-style shadow-default' type={type} onClick={onClick} onKeyDown={onKeyDown}>
            {text}
        </button>
    )
}

export default ButtonLogin