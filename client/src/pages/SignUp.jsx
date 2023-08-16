import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import Auth from '../utils/auth';

export const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [addUser, { loading, error }] = useMutation(ADD_USER);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, username, password);
    try {
      const { data } = await addUser({
        variables: { email, username, password },
      });
      console.log("Data: ", data);
    } catch (err) {
      console.error("Sign up error:", err);
    }
  };

  return (
    <div className="login-form-container display-flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="login-form w-100 p-4"
        style={{
          maxWidth: "400px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Sign Up</h2>
        <div className="form-group display-flex flex-column mb-3">
          <label htmlFor="email" className="mb-3">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@example.com"
            id="email"
            name="email"
            style={{
              padding: "10px",
              borderRadius: "5px",
            }}
          />
        </div>
        <div className="form-group display-flex flex-column mb-3">
          <label htmlFor="username" className="mb-3">
            Username
          </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="username"
            id="username"
            name="username"
            style={{
              padding: "10px",
              borderRadius: "5px",
            }}
          />
        </div>
        <div className="form-group display-flex flex-column mb-3">
          <label htmlFor="password" className="mb-3">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
            id="password"
            name="password"
            style={{
              padding: "10px",
              borderRadius: "5px",
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Sign Up
        </button>
        <div className="display-flex align-center justify-center mt-4">
          <Link to="/Login">
            <button className="btn btn-lg btn-danger mr-4">Back</button>
          </Link>
          <p>Already have a login?</p>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
