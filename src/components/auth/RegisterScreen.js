import React from "react";
import { Link } from "react-router-dom";

export const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title"> Register </h3>
      <form>
        <input
          className="auth__input"
          type="text"
          placeholder="Username"
          name="username"
          autoComplete="off"
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
        />
         <input
          className="auth__input"
          type="password"
          placeholder="Confirm password"
          name="confirm_password"
        />
        <input
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
        />
        <input
          className="auth__input"
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
        />
        <input
          className="auth__input"
          type="text"
          placeholder="Last Name"
          name="last_Name"
          autoComplete="off"
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
