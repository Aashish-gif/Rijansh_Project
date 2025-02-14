'use client';

import { StrictMode, useState, createContext } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Server URL
export const server = "https://zero1-eventtracker-userauth.onrender.com/api/v1/users";

// Context for Authentication
export const Context = createContext({
  isAuthenticated: false, 
  setIsAuthenticated: () => {}, 
  user: {}, 
  setUser: () => {} 
});

const Main = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  return (
    <Context.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>
    
        <App />
      
    </Context.Provider>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Main />
  </StrictMode>
);