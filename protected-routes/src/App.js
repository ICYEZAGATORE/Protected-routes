import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Make sure all these imports are correct and the files exist
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import Login from "./components/ProtectedRoutes/Login";
import Dashboard from "./components/ProtectedRoutes/Dashboard";
import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoute";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div>
        <Navbar isLoggedIn={isAuthenticated} logoutFunction={handleLogout} />

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={<Login loginFunction={handleLogin} />}
            />

            <Route
              element={<ProtectedRoute isAuthenticated={isAuthenticated} />}
            >
              <Route
                path="/dashboard"
                element={<Dashboard logoutFunction={handleLogout} />}
              />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}
