import React, { useState } from "react";
import SideSignIn from "./components/SideSignIn";
import SideSignUp from "./components/SideSignUp";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import "./Main.css";

export default function Main() {
  const [show, setShow] = useState("SIGNIN");

  const signup = () => {
    setShow("SIGNUP");
  };
  const signin = () => {
    setShow("SIGNIN");
  };

  return (
    <div className="container">
      
      <div className="main-container">
        {show === "SIGNIN" ? (
          <div style={{display:'flex',flexDirection:'row'}}>
            <SignIn />
            <SideSignIn showSignUp={() => signup()} />
          </div>
        ) : (
          <div style={{display:'flex',flexDirection:'row'}}>
            <SideSignUp showSignIn={() => signin()} />
            <SignUp />
          </div>
        )}
      </div>
    </div>
  );
}
