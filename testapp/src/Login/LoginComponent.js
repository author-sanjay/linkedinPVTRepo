import React, { useEffect, useState } from "react";
import { CircleCheckBig, CircleX } from "lucide-react";
const LoginComponent = ({ userData, setUserData }) => {
  const [credValid, setCredValid] = useState(false);
  function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  function validatePassword(password) {
    const passwordPattern =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
  }
  const handleLoginFormSubmit = () => {
    if (validateEmail(userData.email) && validatePassword(userData.passWord)) {
      setCredValid(true);
    } else {
      if (!validateEmail(userData.email)) {
        alert("Please enter a valid email");
      } else {
        alert("Please enter a valid Password");
      }
      setCredValid(false);
    }
  };
  return (
    <div
      className=""
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        className=""
        style={{
          width: "100%",
          height: "30%",
          borderRadius: "2vw",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          style={{
            width: "80%",
            height: "90%",
            paddingLeft: "5%",
            paddingRight: "5%",
            outline: "none",
          }}
          placeholder="Email Address"
          value={userData?.userEmail}
          onChange={(e) => {
            setUserData({ ...userData, email: e.target.value });
          }}
        />

        {!userData?.email || userData?.email?.length == 0 ? (
          <></>
        ) : credValid ? (
          <CircleCheckBig color="green" />
        ) : (
          <CircleX color="red" />
        )}
      </div>
      <div
        className=""
        style={{
          width: "100%",
          height: "30%",
          borderRadius: "2vw",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          style={{
            width: "80%",
            height: "90%",
            borderRadius: "2vw",
            paddingLeft: "5%",
            paddingRight: "5%",
            outline: "none",
          }}
          placeholder="Password"
          onChange={(e) => {
            setUserData({ ...userData, passWord: e.target.value });
          }}
          value={userData?.userPassword}
        />
        {!userData?.passWord || userData?.pass?.length == 0 ? (
          <></>
        ) : credValid ? (
          <CircleCheckBig color="green" />
        ) : (
          <CircleX color="red" />
        )}
        <div className='' ></div>
      </div>
      <div
        className=""
        style={{
          width: "100%",
          height: "20%",
          backgroundColor: "black",
          borderRadius: "2vw",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={handleLoginFormSubmit}
      >
        <span>Login</span>
      </div>
    </div>
  );
};

export default LoginComponent;
