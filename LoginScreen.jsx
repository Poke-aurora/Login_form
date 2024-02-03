import React from "react";
import Loginform from "./Loginform";

function LoginScreen() {
  return (
    <div className="loginBox">
      <h2>Login form </h2>
      <form className="form">
        <Loginform
          label="username"
          labelfor="pass"
          inputid="unname"
          inputname="unname"
          inputtype="text"
          inputplaceholder="Enter username"
        />
        <Loginform
          label="password"
          labelfor="pass"
          inputid="pass"
          inputname="pass"
          inputtype="password"
          inputplaceholder="Enter your password"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
export default LoginScreen;
