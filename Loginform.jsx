import React from "react";

function LoginScreen(props) {
  return (
    <div className="field">
      <label for={props.labelfor}>{props.label}</label>
      <input
        id={props.inputid}
        name={props.inputname}
        type={props.inputtype}
        plaeholder={props.inputplaceholder}
      />
    </div>
  );
}
export default LoginScreen;
