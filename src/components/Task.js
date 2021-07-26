import React from "react";

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div
            style={{ cursor: "pointer" }}
            className={`row bg-light ms-1 me-1 mb-2 ${
                task.reminder ? "border-start border-4 border-success" : ""
            }`}
            onDoubleClick={() => onToggle(task.id)}
        >
            <div className="col">
                <h4>{task.text}</h4>
                <p>{task.day}</p>
            </div>
            <div className="col text-end">
                <button
                    className="btn btn-sm"
                    onClick={() => onDelete(task.id)}
                >
                    <span className="text-danger fw-bolder fs-2">&times;</span>
                </button>
            </div>
        </div>
    );
};

export default Task;
