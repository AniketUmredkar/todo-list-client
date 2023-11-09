import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TasksContainer from "./components/TasksContainer";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import ResetPassword from "./components/ResetPassword";
import ForgotPassword from "./components/ForgotPassword";

function App() {
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    const showToastHelper = () => {
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    };

    const hideToast = () => {
        setShowToast(false);
    };

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <TasksContainer
                                showToast={showToastHelper}
                                setToastMessage={setToastMessage}
                            ></TasksContainer>
                        }
                    ></Route>
                    <Route
                        path="/sign-up"
                        element={<SignUp showToast={showToastHelper} setToastMessage={setToastMessage}></SignUp>}
                    ></Route>
                    <Route
                        path="/login"
                        element={<Login showToast={showToastHelper} setToastMessage={setToastMessage}></Login>}
                    ></Route>
                    <Route
                        path="/forgot-password"
                        element={
                            <ForgotPassword
                                showToast={showToastHelper}
                                setToastMessage={setToastMessage}
                            ></ForgotPassword>
                        }
                    ></Route>
                    <Route
                        path="/reset-password/:token"
                        element={
                            <ResetPassword
                                showToast={showToastHelper}
                                setToastMessage={setToastMessage}
                            ></ResetPassword>
                        }
                    ></Route>
                </Routes>
            </BrowserRouter>
            <div
                className={showToast ? "position-fixed bottom-0 px-3 py-4 end-0 show" : "d-none"}
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
            >
                <div className="d-flex border py-2 px-3">
                    <div className="toast-body me-3">{toastMessage}</div>
                    <button type="button" className="btn-close" onClick={hideToast}></button>
                </div>
            </div>
        </div>
    );
}

export default App;
