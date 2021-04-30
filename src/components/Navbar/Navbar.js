import React from "react";
import logo from "../../logo.svg";
import navbar from "./navbar.scss";

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="city tours company" />
            <ul className="nav-links">
                <li>
                    <a href="/" className="nav-link active">
                        Home
                    </a>
                </li>
                <li>
                    <a href="/" className="nav-link">
                        about
                    </a>
                </li>
                <li>
                    <a href="/" className="nav-link ">
                        tours
                    </a>
                </li>
            </ul>
        </nav>
    );
}
