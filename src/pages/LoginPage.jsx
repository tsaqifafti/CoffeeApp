import React from "react";
import Login from "../components/Login";

function LoginPage() {
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
            <span class="navbar-brand fs-2 pointer_nav fw-bold">ABC</span>
            <Login />
        </div>
    );
}

export default LoginPage;
