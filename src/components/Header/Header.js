import React from "react";
import { NavLink } from "react-router-dom";
import { Header, Logo } from "./Header.css";
const HeaderComponent = () => {
    return (
        <Header>
            <div className="container">
                <Logo>
                    <img src="/logo.png" alt="Herb Pilicy" />
                    <h1>Pilica</h1>
                </Logo>

                <nav>
                    <NavLink to="/">Strona Główna</NavLink>
                    <NavLink to="/artykuly">Artykuły</NavLink>
                </nav>
            </div>
        </Header>
    );
};

export default HeaderComponent;
