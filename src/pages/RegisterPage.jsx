import React from "react";
import Register from "../components/Register";

function RegisterPage() {
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
            <Register />
        </div>
    );
}

export default RegisterPage;
