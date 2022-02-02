import React from "react";

export const LoginScreen = () => {
  return (
    <>
      <h3> Login </h3>
      <form>
        <input type="text" placeholder="Username" name="username"/>
        <input type="password" placeholder="Password" name="password"/>

        <button type="submit">Login</button>
        <hr/>

        <p>google</p>

      </form>
    </>
  );
};
