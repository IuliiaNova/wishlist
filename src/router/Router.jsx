import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Active from "../pages/Active";
import All from "../pages/All";
import Closed from "../pages/Closed";
import { useAuth0 } from "@auth0/auth0-react";
import { CircleLoader } from "react-spinners";

const RouterPaths = () => {
  const { isLoading } = useAuth0();

  if(isLoading){
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <CircleLoader color="#5b1db9" />
      </div>
    )
  }
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