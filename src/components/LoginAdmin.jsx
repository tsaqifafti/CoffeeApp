import React, { useState } from "react";
import "../styles/sb-admin-2.css";

function LoginAdmin({ login, errorTampil }) {
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
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12 col-md-9">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">
                                                Admin Login!
                                            </h1>
                                            <p className="text-danger">
                                                {errorTampil}
                                            </p>
                                        </div>
                                        <form
                                            className="user"
                                            onSubmit={onSubmitHandler}
                                        >
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form-control form-control-user"
                                                    id="exampleInputEmail"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Enter Email Address..."
                                                    value={email}
                                                    onChange={
                                                        onEmailChangeHandler
                                                    }
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="password"
                                                    className="form-control form-control-user"
                                                    id="exampleInputPassword"
                                                    placeholder="Password"
                                                    value={password}
                                                    onChange={
                                                        onPasswordChangeHandler
                                                    }
                                                />
                                            </div>
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-user btn-block"
                                            >
                                                Login
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginAdmin;
