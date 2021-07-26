import React from "react";

const Button = ({ cssButton, title, onClick }) => {
    return (
        <button onClick={onClick} className={`btn btn-sm ${cssButton}`}>
            {title}
        </button>
    );
};

export default Button;
