import React from "react";
import { useNavigate } from "react-router-dom";

function Login({ loginFunction }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    loginFunction();
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Please Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
