import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../apiHelpers/auth";

const Navbar = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const navigate = useNavigate();
    const logOutHandler = () => {
        window.localStorage.removeItem("token");
        navigate("/login");
    };

    const fetchUserData = useCallback(() => {
        getUserData()
            .then((res) => {
                if (res.status === 200) {
                    res.json()
                        .then((res) => {
                            setFirstName(res.first_name);
                            setLastName(res.last_name);
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                } else {
                    navigate("/login");
                }
            })
            .catch((err) => {
                console.log(err);
                window.localStorage.removeItem("token");
                navigate("/login");
            });
    }, [navigate]);

    useEffect(() => {
        fetchUserData();
    }, [fetchUserData]);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    Hi {firstName} {lastName}!
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
