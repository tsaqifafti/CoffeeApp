import React from "react";
import { Link } from "react-router-dom";

function Navigation({ isLoggedIn, onLogout }) {
    return (
        <>
            <nav className="navbar navbar-expand-lg padding_nav ">
                <div className="container-fluid">
                    <Link to={"/"}>
                        <span className="navbar-brand fs-2 pointer_nav">
                            ABC
                        </span>
                    </Link>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        {isLoggedIn ? (
                            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                                <li className="nav-item me-4">
                                    <Link to={"/pemesanan"}>
                                        <button className="btn">
                                            Pesanan Saya
                                        </button>
                                    </Link>
                                </li>
                                <li className="nav-item me-4">
                                    <button className="btn" onClick={onLogout}>
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        ) : (
                            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                                <li className="nav-item me-4">
                                    <Link to={"/masuk"}>
                                        <button className="btn">Masuk</button>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/daftar"}>
                                        <button className="btn">Daftar</button>
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navigation;
