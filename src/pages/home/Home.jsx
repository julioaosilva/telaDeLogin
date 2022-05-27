import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () =>{
    const redirect = useNavigate();
    const location = useLocation();

    const exit = ()=>{
        redirect("/login")
    }

    return(
        <>
        <h1>Bem-vindo!</h1>
        <p>{location.state}</p>
        <button onClick = {exit}>sair</button>
        </>
    )
}
export default Home;