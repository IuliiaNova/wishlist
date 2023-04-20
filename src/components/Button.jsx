import React from "react";
import { NavLink, useLocation } from 'react-router-dom';

const Buttons = () => {
    const location = useLocation();
    return (
        <div className="buttons h-[5vh] flex gap-4 items-center justify-center text-center font-mono">
            <NavLink to="/" className={`w-32 p-2 flex-row border-2 rounded-lg border-violet-800 text-violet-800 font-bold hover:shadow-pink-700 hover:shadow-md ${location.pathname === "/" ? "bg-violet-700 text-white" : "bg-violet-100"}`}>All</NavLink>
            <NavLink to="/Active" className={`w-32 p-2 flex-row border-2 rounded-lg border-violet-800 text-violet-800 font-bold hover:shadow-pink-700 hover:shadow-md ${location.pathname === "/Active" ? "bg-violet-700 text-white" : "bg-violet-100"}`}>Active</NavLink>
            <NavLink to="/Closed" className={`w-32 p-2 flex-row border-2 rounded-lg border-violet-800 text-violet-800 font-bold hover:shadow-pink-700 hover:shadow-md ${location.pathname === "/Closed" ? "bg-violet-700 text-white" : "bg-violet-100"}`}>Closed</NavLink>
        </div>
    )
}

export default Buttons;
