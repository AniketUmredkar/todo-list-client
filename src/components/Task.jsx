import React from "react";

const Task = (props) => {
    return (
        <li className="list-group-item">
            {props.title}
        </li>
    );
};

export default Task;
