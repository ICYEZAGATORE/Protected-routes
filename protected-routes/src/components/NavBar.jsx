import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ isLoggedIn, logoutFunction }) {
  return (
    <nav>
      <Link to="/">Home</Link>
      {!isLoggedIn ? (
        <Link to="/login">Login</Link>
      ) : (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <button onClick={logoutFunction}>Logout</button>
        </>
      )}
      <span>{isLoggedIn ? "✅ Logged In" : "❌ Not Logged In"}</span>
    </nav>
  );
}
