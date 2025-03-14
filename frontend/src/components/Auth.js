import React, { useState } from "react";
import { registerUser, loginUser } from "../api";
import { jwtDecode } from "jwt-decode";

const Auth = ({ setUser }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [isLogin, setIsLogin] = useState(true);

  const handleAuth = async () => {
    try {
      const response = isLogin ? await loginUser(formData) : await registerUser(formData);
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        setUser(jwtDecode(response.data.token));
      }
    } catch (error) {
      alert(error.response?.data?.message || "Authentication failed");
    }
  };

  return (
    <div>
      <h2>{isLogin ? "Login" : "Register"}</h2>
      <input type="text" placeholder="Username" onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
      <button onClick={handleAuth}>{isLogin ? "Login" : "Register"}</button>
      <button onClick={() => setIsLogin(!isLogin)}>{isLogin ? "Create an Account" : "Already have an account?"}</button>
    </div>
  );
};

export default Auth;
