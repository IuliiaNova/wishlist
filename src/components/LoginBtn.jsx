import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginBtn = () => {

  const { isLoading, isAuthenticated, error, loginWithRedirect, logout } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    return (
      <>
        <button className='enter border-2 text-white p-2 m-2 w-30 rounded-lg mb-2 font-mono' onClick={() => logout({ returnTo: window.location.origin })}>
          Log out
        </button>
      </>
    );
  } else {
    return <button className='enter border-2 text-white p-2 m-2 w-30 rounded-lg mb-2 font-mono' onClick={() => loginWithRedirect()}>Login</button>;
  }
}

export default LoginBtn;
