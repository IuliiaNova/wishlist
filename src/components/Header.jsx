import React from "react";
import LoginBtn from "./LoginBtn";
import { useAuth0 } from "@auth0/auth0-react";
import '../style/header.css'

const Header = () => {

  const { isAuthenticated, user } = useAuth0();
   
    return (
        <div className="header-container">
          {isAuthenticated && (
            <div className="header-container-user">
            <img src={user.picture} alt="Avatar"/>
            </div>
          )}
          <LoginBtn />
        </div>
    )
}

export default Header;