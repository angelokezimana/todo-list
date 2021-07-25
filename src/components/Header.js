import React from "react";
import Button from "./Button";

const Header = ({ title, showAddTask, onAdd }) => {
    return (
        <div className="row">
            <div className="col fw-bolder fs-2">{title} </div>
            <div className="col text-end">
                <Button
                    cssButton={`mt-1 btn-${showAddTask ? "danger" : "success"}`}
                    title={`${showAddTask ? "Close" : "Add"}`}
                    onClick={onAdd}
                />
            </div>
        </div>
    );
};

Header.defaultProps = {
    title: "To-Do List",
};

export default Header;
