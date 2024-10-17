import React, { useEffect, useState } from "react";
import "./Login.css";
import LoginHeader from "./LoginHeader";
import LoginBody from "./LoginBody";
import LoginBottomSection from "./LoginBottomSection";
function Login() {
  const [selectedButton, setSelectButton] = useState(true);
  const [email, setEmail] = useState("");
  const [counter, setCounter] = useState(0);

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  useEffect(() => {
    if (validateEmail(email)) {
      console.log("Email Valid", email);
    } else {
      console.log("Email Invalid", email);
    }
  }, [email]);

  return (
    <div className="loginContainer">
      <LoginHeader />
      <LoginBody email={email} setEmailAddress={setEmail} />
      <LoginBottomSection />
    </div>
  );
}

export default Login;
