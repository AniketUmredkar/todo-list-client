import React, { useCallback, useEffect, useState } from "react";
import Task from "./Task";
import { useNavigate } from "react-router-dom";
import { createTask, getAllTasks } from "../apiHelpers/task";
import Navbar from "./Navbar";

const TasksContainer = () => {
    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState("");
    const navigate = useNavigate();

    const taskNameChangeHandler = (e) => {
        setTaskName(e.target.value);
    };

    const getAllTasksHelper = useCallback(() => {
        getAllTasks()
            .then((res) => {
                if (res.status === 200) {
                    res.json()
                        .then((res) => {
                            setTasks(res.data);
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
                navigate("/login");
            });
    }, [navigate]);

    const submitHandler = (e) => {
        e.preventDefault();
        createTask(taskName)
            .then((res) => {
                if (res.status === 200) {
                    res.json()
                        .then(() => {
                            getAllTasksHelper();
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                } else {
                    res.json()
                        .then((parsedData) => {
                            console.log(parsedData.message);
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getAllTasksHelper();
    }, [getAllTasksHelper]);

    return (
        <div>
            <Navbar></Navbar>
            <div className="tasks-container">
                <form className="d-flex py-5">
                    <input
                        className="form-control me-2"
                        type="text"
                        placeholder="Buy a book"
                        value={taskName}
                        onChange={taskNameChangeHandler}
                    />
                    <button className="btn btn-outline-success" type="submit" onClick={submitHandler}>
                        Submit
                    </button>
                </form>
                <ul className="list-group">
                    {tasks.map((task, index) => {
                        return <Task key={index} {...task} getAllTasksHelper={getAllTasksHelper}></Task>;
                    })}
                </ul>
            </div>
        </div>
    );
};

export default TasksContainer;
