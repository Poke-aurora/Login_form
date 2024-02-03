import React from "react";
import LoginScreen from "./LoginScreen";

var LoginState = false;



function App() {
  return (
    <div className="container">
      {LoginState === true ? (
        <h1>You are already Logged In</h1>
      ) : (
        <LoginScreen />
      )}
    </div>
  );
}

export default App;
