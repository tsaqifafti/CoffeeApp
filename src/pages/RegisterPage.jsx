import React, { useState } from "react";
import Register from "../components/Register";
import { Link, useNavigate } from "react-router-dom";
import "../styles/style.css";
import { register } from "../utils/api";

function RegisterPage() {
    const [errorTampil, setErrorTampil] = useState(null);
    const navigate = useNavigate();

    async function onRegister({ name, email, password, address }) {
        const { error } = await register({ name, email, password, address });

        if (!error) {
            setErrorTampil("Berhasil Daftar");
            // Set a timeout before reloading the page
            navigate("/masuk");
            // window.location.reload();
            // setTimeout(() => {
            //     window.location.reload();
            // }, 10); // 1000 milliseconds (1 second) delay
        } else {
            setErrorTampil("Daftar gagal, bahwa email sudah terdaftar");
        }
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                margin: "50px auto",
            }}
        >
            <Link to={"/"}>
                <span class="navbar-brand fs-2 pointer_nav fw-bold">ABC</span>
            </Link>
            {errorTampil && <div style={{ color: "red" }}>{errorTampil}</div>}
            <Register register={onRegister} />
        </div>
    );
}

export default RegisterPage;
