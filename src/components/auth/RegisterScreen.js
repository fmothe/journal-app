import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import { removeErrorAction, setErrorAction } from "../../redux/actions/ui";
import { registerNewUser } from "../../redux/actions/auth";
import Swal from 'sweetalert2'
export const RegisterScreen = () => {
  const dispatch = useDispatch();

  const { msgError } = useSelector((state) => state.ui);

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
    if (isValidField()) {
      dispatch(registerNewUser(username, password, email, pname, last_name));
    }
  };

  const isValidField = () => {
    if (username.trim().length === 0) {
      dispatch(setErrorAction("username is required"));
      Swal.fire('Error', 'Username is required', 'error')
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setErrorAction("email is invalid"));
      Swal.fire('Error', 'Email is invalid', 'error')
      return false;
    } else if (password.length < 5) {
      dispatch(setErrorAction("password is too short"));
      Swal.fire('Error', 'Password is too short', 'error')
      return false;
    } else if (validator.isEmpty(pname) || validator.isEmpty(last_name)) {
      dispatch(setErrorAction("Name and Last Name are required"));
      Swal.fire('Error', 'Name and Last Name are required', 'error')
      return false;
    }

    dispatch(removeErrorAction());
    return true;
  };

  return (
    <>
      <h3 className="auth__title"> Register </h3>
      <form onSubmit={handleRegister}>
        {/* {msgError && <div className="auth__alert-error"> {msgError}</div>} */}
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
          <span>Create Account</span>
        </button>

        <Link to="/auth/login" className="ml-1 link">
          {" "}
          Already Registered?
        </Link>
      </form>
    </>
  );
};
