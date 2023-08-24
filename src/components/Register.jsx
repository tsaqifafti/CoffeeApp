import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register({ register }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");

    const onNameChangeHandler = (event) => {
        setName(event.target.value);
    };

    const onEmailChangeHandler = (event) => {
        setEmail(event.target.value);
    };

    const onPasswordChangeHandler = (event) => {
        setPassword(event.target.value);
    };

    const onAddressChangeHandler = (event) => {
        setAddress(event.target.value);
    };
    

    const onSubmitHandler = (event) => {
        event.preventDefault();
        register({
            name,
            email,
            password,
            address,
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
                    Register
                </h1>
                <div className="mb-3">
                    <label for="nameRegister" className="form-label">
                        Name
                    </label>
                    <input
                        type="name"
                        className="form-control"
                        id="nameRegister"
                        value={name}
                        onChange={onNameChangeHandler}
                        style={{
                            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                            border: "1px solid rgba(0, 0, 0, 0.2)",
                        }}
                    />
                </div>
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
                <div className="mb-3">
                    <label for="floatingTextarea">Alamat</label>
                    <textarea
                        id="floatingTextarea"
                        className="form-control"
                        placeholder="*alamat ini yang digunakan untuk tujuan pesanan*"
                        value={address}
                        onChange={onAddressChangeHandler}
                        style={{
                            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                            border: "1px solid rgba(0, 0, 0, 0.2)",
                        }}
                    ></textarea>
                </div>
                <button type="submit" className="btn bgc_btn">
                    Submit
                </button>
            </form>
            <small className="text-center">
                Sudah Memiliki akun ? <Link to={"/masuk"}>Masuk</Link>
            </small>
        </div>
    );
}

export default Register;
