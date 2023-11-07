import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../apiHelpers/auth";

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    };

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        loginUser(email, password).then((res) => {
            if (res) {
                if (res.status === 200) {
                    console.log("Login successfull");
                    navigate("/");
                } else {
                    res.json()
                        .then((parsedData) => {
                            console.log(parsedData.message);
                            props.setToastMessage(parsedData.message);
                            props.showToast();
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                }
            } else {
                console.log("Login failed");
            }
        });
    };

    return (
        <div className="d-flex flex-row justify-content-center align-items-center pt-5 login-form-container">
            <form className="login-form">
                <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="inputEmail"
                        value={email}
                        onChange={emailChangeHandler}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="inputPassword"
                        value={password}
                        onChange={passwordChangeHandler}
                    />
                </div>
                <div className="d-flex flex-row justify-content-between align-items-center pt-4">
                    <button className="btn btn-primary" onClick={submitHandler}>
                        Login
                    </button>
                    <Link to={"/sign-up"} className="primary-link">
                        Sign up
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Login;
