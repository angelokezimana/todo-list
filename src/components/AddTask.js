import React, { useState } from "react";

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const [reminder, setReminder] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault();

        if (!text) {
            alert("Please add a task");
            return;
        }

        onAdd({ text, day, reminder });

        setText("");
        setDay("");
        setReminder(false);
    };

    return (
        <form className="mb-3" onSubmit={onSubmit}>
            <div className="mt-4 mb-3">
                <label htmlFor="addTask" className="form-label">
                    Task
                </label>
                <input
                    type="text"
                    className="form-control form-control-sm"
                    id="addTask"
                    placeholder="Add Task"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="dayTime" className="form-label">
                    Day & Time
                </label>
                <input
                    type="text"
                    className="form-control form-control-sm"
                    id="dayTime"
                    placeholder="Day & Time"
                    value={day}
                    onChange={(event) => setDay(event.target.value)}
                />
            </div>

            <div className="mb-3 form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="setReminder"
                    checked={reminder}
                    value={reminder}
                    onChange={(event) =>
                        setReminder(event.currentTarget.checked)
                    }
                />
                <label className="form-check-label" htmlFor="setReminder">
                    Set Reminder
                </label>
            </div>

            <div className="d-grid gap-2">
                <button type="submit" className="btn btn-sm btn-dark block">
                    Save Task
                </button>
            </div>
        </form>
    );
};

export default AddTask;
