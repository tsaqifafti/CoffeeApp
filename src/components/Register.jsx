import React from "react";

function Register() {
    return (
        <div
            class="card p-5"
            style={{
                width: "30rem",
                boxShadow: "2px 10px 4px rgba(0, 0, 0, 0.2)",
                border: "1px solid rgba(0, 0, 0, 0.2)",
            }}
        >
            <form>
                <h1
                    class="fs-4"
                    style={{ marginBottom: "10px", textAlign: "center" }}
                >
                    Register
                </h1>
                <div class="mb-3">
                    <label for="nameRegister" class="form-label">
                        Name
                    </label>
                    <input
                        type="name"
                        class="form-control"
                        id="nameRegister"
                        style={{
                            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                            border: "1px solid rgba(0, 0, 0, 0.2)",
                        }}
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        style={{
                            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                            border: "1px solid rgba(0, 0, 0, 0.2)",
                        }}
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        style={{
                            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                            border: "1px solid rgba(0, 0, 0, 0.2)",
                        }}
                    />
                </div>
                <button type="submit" class="btn bgc_btn">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Register;
