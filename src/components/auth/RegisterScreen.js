import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

export const RegisterScreen = () => {
  const dispatch = useDispatch();

  const [values, handleInputChange] = useForm({
    username: "",
    password: "",
    email: "",
    pname: "",
    last_name: "",
  });

  const { username, password, email, pname, last_name } = values;

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <>
      <h3 className="auth__title"> Register </h3>
      <form onSubmit={handleRegister}>
        <input
          className="auth__input"
          type="text"
          placeholder="Username"
          name="username"
          autoComplete="off"
          onChange={handleInputChange}
          value={username}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleInputChange}
          value={password}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Confirm password"
          name="confirm_password"
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          onChange={handleInputChange}
          value={email}
        />
        <input
          className="auth__input"
          type="text"
          placeholder="Name"
          name="pname"
          autoComplete="off"
          onChange={handleInputChange}
          value={pname}
        />
        <input
          className="auth__input"
          type="text"
          placeholder="Last Name"
          name="last_name"
          autoComplete="off"
          onChange={handleInputChange}
          value={last_name}
        />

        <button className="btn btn-primary btn-block mb-5" type="submit">
          Create Account
        </button>

        <Link to="/auth/login" className="ml-1 link">
          {" "}
          Already Registered?
        </Link>
      </form>
    </>
  );
};
