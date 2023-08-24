import React, { useState } from "react";
import LoginAdmin from "../components/LoginAdmin";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../utils/api";

function LoginAdminPage() {
    const [errorTampil, setErrorTampil] = useState(null);
    const navigate = useNavigate();

    async function onLogin({ email, password }) {
        const { error } = await loginAdmin({ email, password });

        if (!error) {
            setErrorTampil("login berhasil");
            // Set a timeout before reloading the page
            navigate("/admin/dashboard");
            // window.location.reload();
            // setTimeout(() => {
            //     window.location.reload();
            // }, 10); // 1000 milliseconds (1 second) delay
        } else {
            setErrorTampil(
                "Login failed. Please check your email and password."
            );
        }
    }
    return (
        <>
            <LoginAdmin login={onLogin} errorTampil={errorTampil} />
        </>
    );
}

export default LoginAdminPage;
