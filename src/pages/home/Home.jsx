import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import ListItem from "../../components/listItem/ListItem";
import {estoque} from '../shared/data/mockData/MockData';
import Search from "../../components/listItem/Search";

const Home = () =>{
   const [item, setItem] = useState([])
   const [search, setSearch] = useState('')
    const redirect = useNavigate();
    const exit = ()=>{
        redirect("/login")
    }
   
    useEffect(() => {
        //setItem(estoque)   
   },[])

    return(
        <>
        <h1>Bem-vindo!</h1>
        <button onClick = {exit}>sair</button>
        </>
    )
}
export default Home;