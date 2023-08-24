import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";
import { Link } from "react-router-dom";
import "../styles/style.css";
import { login } from "../utils/api";

function LoginPage() {
    const [errorTampil, setErrorTampil] = useState(null);
    const navigate = useNavigate();

    async function onLogin({ email, password }) {
        const { error } = await login({ email, password });

        if (!error) {
            setErrorTampil("login berhasil");
            // Set a timeout before reloading the page
            navigate("/catalog/categories/Semua");
            // window.location.reload();
            setTimeout(() => {
                window.location.reload();
            }, 10); // 1000 milliseconds (1 second) delay
        } else {
            setErrorTampil(
                "Login failed. Please check your email and password."
            );
        }
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <Link to={"/"}>
                <span className="navbar-brand fs-2 pointer_nav fw-bold">
                    ABC
                </span>
            </Link>
            {errorTampil && <div style={{ color: "red" }}>{errorTampil}</div>}
            <Login login={onLogin} />
        </div>
    );
}

export default LoginPage;
