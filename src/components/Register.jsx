import React from "react";

function Register() {
    return (
        <div
            className="card p-5"
            style={{
                width: "30rem",
                boxShadow: "2px 10px 4px rgba(0, 0, 0, 0.2)",
                border: "1px solid rgba(0, 0, 0, 0.2)",
            }}
        >
            <form>
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
        </div>
    );
}

export default Register;
