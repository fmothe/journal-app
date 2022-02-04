import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { loginAction, startLoginEmailPassword } from "../../redux/actions/auth";

export const LoginScreen = () => {

  const dispatch = useDispatch()
  const [values, handleInputChange] = useForm({
    uid:'fmothe',
    password:'123'
    
  });

  const handleLogin = (e) =>{
    e.preventDefault();
    dispatch(startLoginEmailPassword(values.uid, 'federico'));
    
  }

  const {uid, password} = values
  return (
    <>
      <h3 className="auth__title"> Login </h3>
      <form onSubmit={handleLogin}>
        <input
          className="auth__input"
          type="text"
          placeholder="Username"
          name="uid"
          autoComplete="off"
          value={uid}
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

        <button className="btn btn-primary btn-block" type="submit" >
          Login
        </button>
        <div className="auth__social">
          <p>Login with Social</p>

          <div className="google-btn">
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
        <p className="auth__signin">Don't have an Account? <Link to="/auth/register" className="ml-1 link"> Sign In</Link></p>
        
      </form>
    </>
  );
};
