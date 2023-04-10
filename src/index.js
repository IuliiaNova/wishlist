import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import './style/tailwind.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider 
    domain="dev-7wmznkm41wx0ichb.us.auth0.com"
    clientId="uk0msY5QXRml3wLU90f10nsZ8jUw3KSk"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>

    <App />
    </Auth0Provider>
  </React.StrictMode>
);

