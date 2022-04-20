import React from "react";
import "./FormCadastro.css";

const FormCadastro = (props) => {
    return (
        <div className="form-cadastro-container shadow-default">
            <h1>Cadastro</h1>
            <h2>Faça seu cadastro para acessar nosso sistema!</h2>
            <p>Todos os campos são <strong style={{ color: "red" }}>obrigatórios</strong>.</p>
            {props?.children}
        </div>
    )
}
export default FormCadastro;