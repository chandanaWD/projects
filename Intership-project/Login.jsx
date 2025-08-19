import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CryptoJS from "crypto-js";
import Swal from "sweetalert2";  // Import SweetAlert2

const Login = () => {
  const [user_name, setuser_name] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const hashPassword = (password) => {
    return CryptoJS.SHA512(password).toString(CryptoJS.enc.Hex);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const hashedPassword = hashPassword(password);

    try {
      const response = await axios.post(
        `http://localhost:8080/login?username=${user_name}&password=${hashedPassword}`,
        {},
        { withCredentials: true }
      );

      console.log("Login Successful:", response.data);

      if (response.data.uname) {
        localStorage.setItem("userName", response.data.uname);

        // SweetAlert on successful login
        Swal.fire({
          title: "Login Successful!",
          text: `Welcome, ${response.data.uname}!`,
          icon: "success",
          confirmButtonText: "Go to Home",
        }).then(() => {
          navigate("/home");
        });

      } else {
        // SweetAlert for invalid credentials
        Swal.fire({
          title: "Login Failed",
          text: "Invalid username or password.",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }

    } catch (error) {
      console.error("Login error:", error);

      // SweetAlert for server or network error
      Swal.fire({
        title: "Error",
        text: error.response?.data?.message || "Something went wrong!",
        icon: "error",
        confirmButtonText: "Okay",
      });
    }
  };

  return (
    <div className="login-container23">
      <h2 className="login-title23">Login</h2>
      <form className="login-form23" onSubmit={handleLogin}>
        <div className="input-group23">
          <label htmlFor="user_name23">Username</label>
          <input
            type="text"
            id="user_name"
            value={user_name}
            onChange={(e) => setuser_name(e.target.value)}
            required
          />
        </div>
        <div className="input-group23">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button23">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
