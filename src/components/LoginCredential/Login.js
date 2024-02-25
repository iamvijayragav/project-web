import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../global.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();


  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, email }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem("email", data.data.email);
        localStorage.setItem("_id", data.data._id);
        navigate("/admin-dashboard");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Check Your Credential!");
    }
  };


  return (
    <div className="Login-container">
      <div className="Login-image">
        <img
          src="https://www.tecnicoepc.com/wp-content/uploads/2023/02/download-49.jpeg"
          alt="show"
        />
      </div>
      <div className="Login-content">
        <h1>Login </h1>
        <div>
          <input
            placeholder="Username"
            type="text"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Email"
            type="text"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p>{message}</p>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
