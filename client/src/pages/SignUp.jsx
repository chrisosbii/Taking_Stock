import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { REGISTER_USER } from "../utils/mutations";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [registerUser, { loading, error }] = useMutation(REGISTER_USER);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await registerUser({
        variables: { email, username, password },
      });

      // Do something with the response data if needed

      console.log("User registered successfully:", data);

      // Clear the input fields after successful registration
      setEmail("");
      setUsername("");
      setPassword("");
    } catch (err) {
      console.error("Registration error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Sign Up</h2>
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
        <label htmlFor="username">Username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="username"
          id="username"
          name="username"
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
      <button type="submit" className="btn btn-primary">
        Sign Up
      </button>
      <p>Already have a login?</p>
      <Link to="/Login">
        <button className="btn btn-lg btn-primary">Back</button>
      </Link>
    </form>
  );
};

export default SignUpForm;
