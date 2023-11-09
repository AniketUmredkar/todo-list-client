import React, { useState } from "react";
import { forgotPassword } from "../apiHelpers/auth";
import { Link } from "react-router-dom";

const ForgotPassword = (props) => {
    const [email, setEmail] = useState("");

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        forgotPassword(email).then((res) => {
            if (res) {
                if (res.status === 200) {
                    res.json()
                        .then((parsedData) => {
                            console.log(parsedData.message);
                            props.setToastMessage(parsedData.message);
                            props.showToast();
                        })
                        .catch((err) => {
                            console.log(err);
                        });
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
                <div className="d-flex flex-row justify-content-between align-items-center pt-4">
                    <button className="btn btn-primary" onClick={submitHandler}>
                        Submit
                    </button>
                    <Link to={"/login"} className="primary-link">
                        Back to login
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default ForgotPassword;
