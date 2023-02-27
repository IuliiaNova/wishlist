import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Active from "../pages/Active";
import All from "../pages/All";
import Closed from "../pages/Closed";

const RouterPaths = () => {
    return(
        <>
        <BrowserRouter >
        <Routes>
          <Route path="/" element={<All />}/>
          <Route path="/Active" element={<Active />}/>
          <Route path="/Closed" element={<Closed />}/>
          <Route path="/*" element={<Navigate replace to="/" />}/>
        </Routes>
      </BrowserRouter>
        </>
    )
}

export default RouterPaths; 