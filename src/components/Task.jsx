import React, { useState } from "react";
import { deleteTask, updateTask } from "../apiHelpers/task";

const Task = (props) => {
    const [newTitle, setNewTitle] = useState(props.title);
    const [showEdit, setShowEdit] = useState(false);

    const deleteTaskHandler = () => {
        deleteTask(props.id)
            .then((res) => {
                if (res.status === 200) {
                    props.getAllTasksHelper();
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
    const completeTaskHandler = () => {
        updateTask(props.id, null, "completed")
            .then((res) => {
                if (res.status === 200) {
                    props.getAllTasksHelper();
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
    const revertCompleteTaskHandler = () => {
        updateTask(props.id, null, "pending")
            .then((res) => {
                if (res.status === 200) {
                    props.getAllTasksHelper();
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
    const editTitleHandler = (e) => {
        e.preventDefault();
        updateTask(props.id, newTitle, null)
            .then((res) => {
                if (res.status === 200) {
                    setShowEdit(false);
                    props.getAllTasksHelper();
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

    const editHandler = () => {
        setShowEdit(!showEdit);
    };

    const titleChangeHandler = (e) => {
        setNewTitle(e.target.value);
    };

    const cancelHandler = () => {
        setShowEdit(false);
        setNewTitle(props.title);
    };
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {showEdit ? (
                <form className="d-flex justify-content-between edit-form">
                    <input
                        className="form-control me-2"
                        type="text"
                        placeholder="Buy a book"
                        value={newTitle}
                        onChange={titleChangeHandler}
                    />
                    <div className="d-flex">
                        <button type="button" className="btn btn-outline-secondary me-2" onClick={cancelHandler}>
                            Cancel
                        </button>
                        <button className="btn btn-outline-success" type="submit" onClick={editTitleHandler}>
                            Submit
                        </button>
                    </div>
                </form>
            ) : (
                <>
                    <span className={props.status === "completed" ? "text-decoration-line-through" : ""}>
                        {props.title}
                    </span>
                    <div>
                        {props.status !== "completed" ? (
                            <button type="button" className="btn btn-outline-primary me-2" onClick={editHandler}>
                                Edit
                            </button>
                        ) : (
                            ""
                        )}

                        {props.status === "completed" ? (
                            <button
                                type="button"
                                className="btn btn-outline-success me-2"
                                onClick={revertCompleteTaskHandler}
                            >
                                Undone
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="btn btn-outline-success me-2"
                                onClick={completeTaskHandler}
                            >
                                Done
                            </button>
                        )}

                        <button type="button" className="btn btn-outline-danger" onClick={deleteTaskHandler}>
                            Delete
                        </button>
                    </div>
                </>
            )}
        </li>
    );
};

export default Task;
