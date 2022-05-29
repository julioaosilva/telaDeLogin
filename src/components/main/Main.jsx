import React from "react";
import "./Main.css";
import Header from "../header/Header";
import Menu from "../menuDefault/Menu";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

const Main = () => {

    return (
        <main className="main-container">
            <Header>
                <Link to="/">Logo</Link>
                <Menu />
            </Header>
            <Footer />
        </main>
    )
}

export default Main