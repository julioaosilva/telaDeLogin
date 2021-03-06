import React, { useState } from "react";
import "./Cadastro.css";
import FormCadastro from "../../components/forms/formCadastro/FormCadastro";
import InputLogin from "../../components/input/inputLogin/InputLogin";
import Select from "../../components/select/Select";
import { setor } from "../../shared/mockData/selectOptions/selectOptions";
import Footer from "../../components/footer/Footer";
import ButtonLogin from "../../components/buttons/buttonLogin/ButtonLogin";

const Cadastro = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showPwAgain, setShowPwAgain] = useState(false)
    const [createPassword, setCreatePassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")
    const [name, setName] = useState("")
    const [matricula, setMatricula] = useState("")
    const [email, setEmail] = useState("")
    const [telephone, setTelephone] = useState("")
    const [userName, setUsername] = useState("")
    const [select, setSelect] = useState("")
    const [password, setPassword] = useState("")
    const [passwordAgain, setPasswordAgain] = useState("")

    function openCloseEyes() {
        setShowPassword(!showPassword)
    }
    
    function openCloseEyesRepeat() {
        setShowPwAgain(!showPwAgain)
    }

    function getPassword(e) {
        setCreatePassword(e.target.value)
    }

    function getRepeatPassword(e) {
        setRepeatPassword(e.target.value)
    }

    function getTelephone(e) {
         setTelephone(e.target.value)
    }

    const validarTelefone = (e) => {
        const text = "e345"
        const patternTel = /[^0-9]/g;
        patternTel.lastIndex = 0;
        let campoTel = e;
        const pesquisaTel = patternTel.test(text)
        if(pesquisaTel){
            campoTel.value = "";
        }
    }

    const onSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <>
            <FormCadastro onSubmit={()=>{}}>
                <section className="cadastro-container">
                    <div className="cadastro-input">
                        <div className="cadastro-input-items">
                            <InputLogin autoFocus={true} type="text" name="cadastroNome" placeholder="Nome completo" />
                            <span className="login-obrigatorio login-text">campo obrigat??rio</span>
                        </div>
                        <div className="cadastro-input-items">
                            <InputLogin type="text" name="cadastroMatricula" placeholder="Matr??cula" />
                            <span className="login-obrigatorio login-text">campo obrigat??rio </span>
                        </div>
                    </div>
                    <div className="cadastro-input">
                        <div className="cadastro-input-items">
                            <InputLogin type="email" placeholder="E-mail" />
                            <span className="login-obrigatorio login-text">campo obrigat??rio </span>
                        </div>
                        <div className="cadastro-input-items">
                            <InputLogin type="text" placeholder="Telefone (apenas n??meros)"  onChange={getTelephone} />
                           {<span className="login-obrigatorio login-text">campo obrigat??rio </span>}
                        </div>
                    </div>
                    <div className="cadastro-input">
                        <div className="cadastro-input-items">
                            <InputLogin type="text" placeholder="Nome de usu??rio" ariaLabel={"escolha um nome de usu??rio"}/>
                            <span className="login-obrigatorio login-text">campo obrigat??rio </span>
                        </div>
                        <div className="cadastro-input-items">
                            <Select options={setor} defaultValue={""} label={"Setor: "} />
                            <span className="login-obrigatorio login-text">campo obrigat??rio </span>
                        </div>
                    </div>
                    <div className="cadastro-input">
                        <div className="cadastro-input-items">
                            <InputLogin type={!showPassword ? "password" : "text"} placeholder="Escolha uma senha" id="input-create-password" maxLength={15} value={createPassword} onChange={getPassword}>
                                <div className={showPassword ? "login-icon-eye login-icon-hidden-password" : "login-icon-eye login-icon-show-password"} title={!showPassword ? "mostrar senha" : "ocultar senha"} onClick={openCloseEyes}>
                                </div>
                            </InputLogin>
                            {createPassword && createPassword.length < 8 && <span className="login-obrigatorio login-text">campo obrigat??rio </span>}
                        </div>
                        <div className="cadastro-input-items">
                            <InputLogin type={!showPwAgain ? "password" : "text"} placeholder="Confirme a senha" id="input-repeat-password" maxLength={15} value={repeatPassword} onChange={getRepeatPassword}>
                                <div className={showPwAgain ? "login-icon-eye login-icon-hidden-password" : "login-icon-eye login-icon-show-password"} title={!showPwAgain ? "mostrar senha" : "ocultar senha"} onClick={openCloseEyesRepeat}>
                                </div>
                            </InputLogin>
                            {createPassword && createPassword.length < 8 && <span className="login-obrigatorio login-text"> use 8 caracteres ou mais!</span>}
                        </div>
                    </div>
                    <div className="cadastro-btn">
                        <ButtonLogin text="Cadastrar" type="submit" />
                    </div>
                </section>
            </FormCadastro>
            <Footer />
        </>
    )
}

export default Cadastro