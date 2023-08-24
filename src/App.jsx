import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import FooterItem from "./components/FooterItem";
import CatalogPage from "./pages/CatalogPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ReceiptPage from "./pages/ReceiptPage";
import PemesananUserPage from "./pages/PemesananUserPage";
import LoginAdminPage from "./pages/LoginAdminPage";
import DashboardAdminPage from "./pages/DashboardAdminPage";
import DashboardBuktiPembayaranPage from "./pages/DashboardBuktiPembayaranPage";
import DashboardProdukPage from "./pages/DashboardProdukPage";
import { GetAllTransactionUser } from "./utils/api";

function App() {
    const [isLoading, setIsLoading] = useState(true); // New state for loading
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        // Simulate an async token check
        const checkToken = async () => {
            const token = localStorage.getItem("userToken");
            if (token) {
                setIsLoggedIn(true);
            }
            setIsLoading(false); // Set loading to false once the token check is done
        };

        checkToken();
        
    }, []);

    const location = useLocation();
    const isLoginPage = location.pathname.includes("/masuk");
    const isRegisterPage = location.pathname.includes("/daftar");
    const isAdminLogin = location.pathname.includes("/admin");
    const isAdminDashboard = location.pathname.includes("/admin/dashboard");

    const shouldShowHeaderFooter = !(
        isLoginPage ||
        isRegisterPage ||
        isAdminLogin ||
        isAdminDashboard
    );

    const handleLogout = () => {
        // Clear token from local storage and update isLoggedIn state
        localStorage.removeItem("userToken");
        setIsLoggedIn(false);
    };

    // Show loading if still loading
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {shouldShowHeaderFooter && (
                <header>
                    <Navigation
                        isLoggedIn={isLoggedIn}
                        onLogout={handleLogout}
                    />
                </header>
            )}
            <Routes>
                <Route
                    path="/admin/dashboard"
                    element={<DashboardAdminPage />}
                />
                <Route
                    path="/admin/pembayaran"
                    element={<DashboardBuktiPembayaranPage />}
                />
                <Route path="/admin/produk" element={<DashboardProdukPage />} />
                <Route path="/admin" element={<LoginAdminPage />} />
            </Routes>
            <main>
                <Routes>
                    <Route path="/masuk" element={<LoginPage />} />
                    <Route path="/daftar" element={<RegisterPage />} />
                    <Route path="/" element={<HomePage />} />

                    <Route
                        path="/catalog/categories/:Category"
                        element={<CatalogPage />}
                    />
                    <Route path="/detail/:id" element={<DetailPage />} />
                    <Route path="/receipt" element={<ReceiptPage />} />
                    <Route path="/Pemesanan" element={<PemesananUserPage />} />
                </Routes>
            </main>
            {shouldShowHeaderFooter && <FooterItem />}
        </>
    );
}

export default App;
