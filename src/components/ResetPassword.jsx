import React, { useState } from "react";
import { resetPassword } from "../apiHelpers/auth";
import { Link, useNavigate, useParams } from "react-router-dom";

const ResetPassword = (props) => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const params = useParams();
    const navigate = useNavigate();

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    };

    const confirmPasswordChangeHandler = (e) => {
        setConfirmPassword(e.target.value);
    };

    const redirectToLogin = () => {
        navigate("/login");
    };

    const submitHandler = (e) => {
        e.preventDefault();
        resetPassword(password, confirmPassword, params.token).then((res) => {
            if (res) {
                if (res.status === 200) {
                    res.json()
                        .then((parsedData) => {
                            console.log(parsedData.message);
                            props.setToastMessage(parsedData.message);
                            props.showToast();
                            setTimeout(redirectToLogin, 3000);
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

export default ResetPassword;
