import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import {
  startGoogleLogin,
  startLoginWithUserIdPassword,
} from "../../redux/actions/auth";
import validator from "validator";
import { removeErrorAction, setErrorAction } from "../../redux/actions/ui";

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const [values, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const { loading, msgError } = useSelector((state) => state.ui);
  const { email, password } = values;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginWithUserIdPassword(email, password));
  };

  const googleLogin = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <>
      <h3 className="auth__title"> Login </h3>

      {msgError && <div className="auth__alert-error"> {msgError}</div>}
      <form onSubmit={handleLogin}>
        <input
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />

        <button
          className="btn btn-primary btn-block"
          type="submit"
          disabled={loading}
        >
          Login
        </button>
        <div className="auth__social">
          <p>Login with Social</p>

          <div className="google-btn" onClick={googleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <p className="auth__signin">
          Don't have an Account?{" "}
          <Link to="/auth/register" className="ml-1 link">
            {" "}
            Sign In
          </Link>
        </p>
      </form>
    </>
  );
};
