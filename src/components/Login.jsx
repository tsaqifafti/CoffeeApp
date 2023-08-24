import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login({ login }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onEmailChangeHandler = (event) => {
        setEmail(event.target.value);
    };

    const onPasswordChangeHandler = (event) => {
        setPassword(event.target.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        login({
            email,
            password,
        });
    };

    return (
        <div
            className="card p-5"
            style={{
                width: "30rem",
                boxShadow: "2px 10px 4px rgba(0, 0, 0, 0.2)",
                border: "1px solid rgba(0, 0, 0, 0.2)",
            }}
        >
            <form onSubmit={onSubmitHandler}>
                <h1
                    className="fs-4"
                    style={{ marginBottom: "10px", textAlign: "center" }}
                >
                    Login
                </h1>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        value={email}
                        onChange={onEmailChangeHandler}
                        style={{
                            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                            border: "1px solid rgba(0, 0, 0, 0.2)",
                        }}
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        value={password}
                        onChange={onPasswordChangeHandler}
                        style={{
                            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                            border: "1px solid rgba(0, 0, 0, 0.2)",
                        }}
                    />
                </div>
                <button type="submit" className="btn bgc_btn">
                    Submit
                </button>
            </form>
            <small className="text-center">
                Belum memiliki akun ? <Link to={"/daftar"}>Daftar</Link>
            </small>
        </div>
    );
}

export default Login;
