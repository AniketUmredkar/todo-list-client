import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TasksContainer from "./components/TasksContainer";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TasksContainer></TasksContainer>}></Route>
                    <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
                    <Route path="/login" element={<Login></Login>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
