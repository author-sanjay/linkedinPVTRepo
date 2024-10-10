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
  

  const clickButton = () => {
    setCounter((counter) => counter + 1);
    // console.log(counter)
  };
  return (
    <div className="loginContainer">

      <LoginHeader />
      <LoginBody />
      <LoginBottomSection />
    </div>
  );
}

export default Login;
