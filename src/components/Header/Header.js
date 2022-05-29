import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <header>
            <h1>Pilica</h1>
            <nav>
                <NavLink to="/">Strona Główna</NavLink>
                <NavLink to="/artykuly">Artykuły</NavLink>
            </nav>
        </header>
    );
};

export default Header;
