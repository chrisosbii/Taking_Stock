import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log('formState: ',formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <div className="login-form-container display-flex justify-center">
      <form
        onSubmit={handleFormSubmit}
        className="login-form w-100 p-4"
        style={{
          maxWidth: "400px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Log in</h2>
        {error && <p style={{ color: "red" }}>{error.message}</p>}
        <div className="form-group display-flex flex-column mb-3">
          <label htmlFor="email" className="mb-3">
            Email
          </label>
          <input
            value={formState.email}
            onChange={handleChange}
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
          <label htmlFor="password" style={{ marginBottom: "5px" }}>
            Password
          </label>
          <input
            value={formState.password}
            onChange={handleChange}
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
          Log in
        </button>
        <div className="display-flex align-center justify-center mt-4">
          <Link to="/SignUp">
            <button className="btn btn-lg btn-danger mr-4">Sign Up</button>
          </Link>
          <p>Don't have a profile yet?</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
