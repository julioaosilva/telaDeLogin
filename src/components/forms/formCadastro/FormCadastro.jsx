import React from 'react';
import './FormCadastro.css';

const FormCadastro = ({children, onSubmit}) => {
    return (
        <form className='form-cadastro-container shadow-default' onSubmit={onSubmit}>
            <h1>Cadastro</h1>
            <h2>Faça seu cadastro para acessar nosso sistema!</h2>
            <p>Todos os campos são <strong style={{ color: '#f00' }}>obrigatórios</strong>.</p>
            {children}
        </form>
    )
}

export default FormCadastro