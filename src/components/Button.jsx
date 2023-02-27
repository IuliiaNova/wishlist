import React from "react";
import { Link } from 'react-router-dom';
import RouterPaths from "../router/Router";

const Buttons = () => {
    return (
        <div className="buttons h-[5vh] flex gap-8 items-center justify-center">
            <Link to="/" className="all-wishes flex-row">All</Link>
            <Link to="/Active" className="active-wishes flex-row">Active</Link>
            <Link to="/Closed" className="closed-wishes flex-row">Closed</Link>
        </div>
    )
}

export default Buttons;