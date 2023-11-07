import React from "react";
import { logOutUser } from "../apiHelpers/auth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const logOutHandler = () => {
        logOutUser()
            .then((res) => {
                if (res.status === 200) {
                    navigate("/login");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    Home
                </a>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <button type="button" className="nav-button" onClick={logOutHandler}>
                                Log out
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
