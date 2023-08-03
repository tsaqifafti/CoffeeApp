import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import FooterItem from "./components/FooterItem";
import CatalogPage from "./pages/CatalogPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
    return (
        <>
            <Routes>
                <Route path="/masuk" element={<LoginPage />} />
                <Route path="/daftar" element={<RegisterPage />} />
            </Routes>
            <header>
                <Navigation />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route
                        path="/catalog/categories/:Category"
                        element={<CatalogPage />}
                    />
                    <Route path="/detail/:id" element={<DetailPage />} />
                </Routes>
            </main>
            <FooterItem />
        </>
    );
}

export default App;
