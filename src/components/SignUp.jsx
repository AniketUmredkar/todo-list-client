import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../apiHelpers/auth";

const SignUp = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const navigate = useNavigate();

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    };

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    };

    const confirmPasswordChangeHandler = (e) => {
        setconfirmPassword(e.target.value);
    };

    const firstNameChangeHandler = (e) => {
        setFirstName(e.target.value);
    };

    const lastNameChangeHandler = (e) => {
        setLastName(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        createUser(firstName, lastName, email, password, confirmPassword).then((res) => {
            if (res) {
                if (res.status === 200) {
                    console.log("Sign up successfull");
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
                    <label htmlFor="inputFirstName" className="form-label">
                        First Name
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="inputFirstName"
                        value={firstName}
                        onChange={firstNameChangeHandler}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputLastName" className="form-label">
                        Last Name
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="inputLastName"
                        value={lastName}
                        onChange={lastNameChangeHandler}
                    />
                </div>
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
                <div className="mb-3">
                    <label htmlFor="inputConfirmPassword" className="form-label">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="inputConfirmPassword"
                        value={confirmPassword}
                        onChange={confirmPasswordChangeHandler}
                    />
                </div>
                <div className="d-flex flex-row justify-content-between align-items-center pt-4">
                    <button className="btn btn-primary" onClick={submitHandler}>
                        Sign Up
                    </button>
                    <Link to={"/login"} className="primary-link">
                        Already have account?
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
