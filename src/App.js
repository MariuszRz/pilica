import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styled/theme";
import GlobalStyle from "./styled/globalStyled";
import { Header } from "./components";
import { HomePage, Article } from "./pages";
function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/artykuly" element={<Article />} />
                </Routes>
                <GlobalStyle />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
