import React from "react";
import { Link } from 'react-router-dom';

const Buttons = () => {
    return (
        <div className="buttons h-[5vh] flex gap-4 items-center justify-center text-center font-mono">
            <Link to="/" className="all-wishes w-32 p-2 flex-row border-2 rounded-lg border-violet-800 text-violet-800 font-bold hover:shadow-pink-700 hover:shadow-md">All</Link>
            <Link to="/Active" className="active-wishes w-32 p-2 flex-row border-2 rounded-lg border-violet-800 text-violet-800 font-bold hover:shadow-pink-700 hover:shadow-md">Active</Link>
            <Link to="/Closed" className="closed-wishes w-32 p-2 flex-row border-2 rounded-lg border-violet-800 text-violet-800 font-bold hover:shadow-pink-700 hover:shadow-md">Closed</Link>
        </div>
    )
}

export default Buttons;