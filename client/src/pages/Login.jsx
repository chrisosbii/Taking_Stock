import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import '../App.css'

import  Auth from "../utils/auth";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginUser, { loading, error }] = useMutation(LOGIN_USER);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser({
        variables: { email, password },
      });
      console.log("Data: ", data);
      const token = data.login.token;
      Auth.login(data.login.token);
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
    <h2>Login</h2>
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="youremail@example.com"
        id="email"
        name="email"
        className="form-control"
      />
    </div>
    <div className="form-group">
    <label htmlFor="password">Password</label>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="password"
        id="password"
        name="password"
        className="form-control"
      />
    </div>
      <button type="submit" className="btn btn-lg btn-primary">Log in</button>
      <p>Don't have a profile yet?</p>
      <Link to="/SignUp">
        <button className="btn btn-lg btn-primary">Sign Up</button>
      </Link>
    </form>
  );
};

export default LoginForm;

