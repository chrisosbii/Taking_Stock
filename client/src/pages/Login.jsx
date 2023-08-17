import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">email</label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="youremail@example.com"
        id="email"
        name="email"
      />
      <label htmlFor="password">password</label>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="password"
        id="password"
        name="password"
      />
      <button type="submit">Log in</button>
      <p>Don't have a profile yet?</p>
      <Link to="/SignUp">
        <button className="btn btn-lg btn-danger">Sign Up</button>
      </Link>
    </form>
  );
};

export default LoginForm;
