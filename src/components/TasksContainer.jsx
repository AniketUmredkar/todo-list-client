import React, { useEffect, useState } from "react";
import Task from "./Task";
import { useNavigate } from "react-router-dom";
import { getAllTasks } from "../apiHelpers/task";

const TasksContainer = () => {
    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
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

    return (
        <div>
            <ul className="list-group">
                {tasks.map((task, index) => {
                    return <Task key={index} {...task}></Task>;
                })}
            </ul>
        </div>
    );
};

export default TasksContainer;
