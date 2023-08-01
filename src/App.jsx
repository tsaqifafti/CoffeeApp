import React from "react";
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
            {/* <LoginPage />
            <RegisterPage /> */}
            <header>
                <Navigation />
            </header>
            <main>
                <CatalogPage />
                {/* <HomePage /> */}
                {/* <DetailPage /> */}
            </main>
            <FooterItem />
        </>
    );
}

export default App;
