import React, { useState } from "react";
import Login from "./Login";

import { Sidebar } from "./components/Sidebar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initially assume user is logged in

  const handleLogout = () => {
    setIsLoggedIn(false); // Set logged out state
  };

  const handleLogin = () => {
    setIsLoggedIn(true); // Set logged in state
  };
  return (
    <div>
      {isLoggedIn ? (
        <Sidebar onLogout={handleLogout} /> // Pass the logout handler to Sidebar
      ) : (
        <Login onLogin={handleLogin} /> // Pass the login handler to Login
      )}
    </div>
    
  );
}

export default App;
