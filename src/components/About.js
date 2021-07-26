import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="text-secondary text-center">
            <h4>Version 0.0.1</h4>
            <Link to="/" className="btn btn-sm btn-link">
                Go Back
            </Link>
        </div>
    );
};

export default About;
