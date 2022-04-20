import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import Cadastro from "./pages/cadastro/Cadastro";

const Rotas = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/inicio" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/recuperar-senha" element={<ForgotPassword />} />
            <Route path="/cadastro" element={<Cadastro />} />
           
        </Routes >
    )
}
export default Rotas;