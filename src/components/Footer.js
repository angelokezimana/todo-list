import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="text-center">
            Copyright &copy; 2021 <br />
            <Link to="/about" className="btn btn-sm btn-link">
                About
            </Link>
        </div>
    );
};

export default Footer;
