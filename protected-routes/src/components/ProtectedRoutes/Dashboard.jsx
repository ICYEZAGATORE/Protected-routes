import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard({ logoutFunction }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutFunction();
    navigate("/");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>
        This is a protected page. You can only see this if you're logged in.
      </p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
