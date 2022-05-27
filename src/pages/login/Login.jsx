import React, { useEffect, useState } from "react";
import "./Login.css";
import FormLogin from "../../components/forms/formLogin/FormLogin";
import InputLogin from "../../components/input/inputLogin/InputLogin";
import ButtonLogin from "../../components/buttons/buttonLogin/ButtonLogin";
import Footer from "../../components/footer/Footer";
import { Link, useNavigate } from "react-router-dom";

const Login = (props) => {
    const [isShow, setIsShow] = useState(false);
    const [obrigatorio, setObrigatorio] = useState(false);
    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");
    const redirect = useNavigate();

    const openCloseEyes = () => {
        setIsShow(!isShow)
    };

    const getUserName = (a) => {
        setUserName(a.target.value);
    }
console.log(userName)
    const getPassword = (a) => {
        setPassWord(a.target.value);
    }
 
    const onKeyDown = (e) =>{
        if(e.code === 'Enter' || e.code ==='NumberpadEnter') {
            let valueKey = e.target.value
            if (valueKey && userName.length >= 6 && userName !== "" && passWord.length >= 8 && passWord !== "") {
                redirect("/inicio")
            } else {
                setObrigatorio(true);
            }
        }
    }

    const enter = () => {     
        if (userName.length >= 6 && userName !== "" && passWord.length >= 8 && passWord !== "") {
                redirect("/inicio", {state: userName})
            } 
            else {
                setObrigatorio(true);
            }
    }

    useEffect(() => {
        console.log("renderizei");
    }, []);
    return (
        <>
            <FormLogin >
                {/* {<span className="login-obrigatorio login-text"> usuário não cadastrado</span>} */}
                <div className="login-input-user">
                    <InputLogin type="text" placeholder="Nome de usuário" id="input-login-user" autoFocus={true} maxLength={15} value={userName}
                        onChange={getUserName} onKeyDown = {onKeyDown}/>
                    {userName && userName.length < 6 && <span className="login-obrigatorio login-text"> use 6 caracteres ou mais!</span>}
                    {obrigatorio && !userName && <span className="login-obrigatorio login-text">campo obrigatório</span>}
                </div>
                <div className="login-input-user">
                    <InputLogin type={!isShow ? "password" : "text"} placeholder="Senha" id="input-login-password" maxLength={15} value={passWord} onChange={getPassword} onKeyDown = {onKeyDown}>
                        <div className={isShow ? "login-icon-eye login-icon-hidden-password" : "login-icon-eye login-icon-show-password"} title={!isShow ? "mostrar senha" : "ocultar senha"} onClick={openCloseEyes}>
                        </div>
                    </InputLogin>
                    {passWord && passWord.length < 8 && <span className="login-obrigatorio login-text"> use 8 caracteres ou mais!</span>}
                    {obrigatorio && !passWord && <span className="login-obrigatorio login-text">campo obrigatório</span>}
                </div>
                <ButtonLogin text="Entrar" onClick={enter} />
                <div className="login-link">
                    <p className="login-text">
                        <Link to="/cadastro" style={{ textDecoration: "none", fontWeight: "bold", color: "black", padding: "10px", cursor: "poiter" }}>Cadastre-se</Link>
                    </p>
                    <p className="login-text">
                        <Link to="/recuperar-senha" style={{ textDecoration: "none", fontWeight: "bold", color: "black", padding: "10px", cursor: "poiter" }}>Esqueceu a senha?</Link>
                    </p>
                </div>
            </FormLogin>
            <Footer />
        </>
    );
};
export default Login;