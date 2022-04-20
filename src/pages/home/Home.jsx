import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = ()=>{
   
    const redirect = useNavigate();
    const exit = ()=>{
        redirect("/login")
    }
   
    useEffect(()=>{
    console.log("renderizou!")
   },[])
    return(
        <>
        <h1>Bem-vindo!</h1>
        <button onClick = {exit}>sair</button>
        
        </>
    )
}
export default Home;