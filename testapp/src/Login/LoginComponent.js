import React, { useEffect, useState } from "react";
import { CircleCheckBig, CircleX } from "lucide-react";
import { useUser } from "../Context/UserContext";
const LoginComponent = ({ userData, setUserData }) => {
  const [credValid, setCredValid] = useState(0);
  const { setUser, userObject } = useUser();
  function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    console.log(emailPattern.test(email))
    return emailPattern.test(email);
  }

  function validatePassword(password) {
    const passwordPattern =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
  }
  const handleLoginFormSubmit = () => {
    if (validateEmail(userData.email) && validatePassword(userData.password)) {
      setCredValid(true);
      setUser({ email: userData.email, password: userData.password });
      console.log(userObject);
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
          value={userData?.email}
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
            setUserData({ ...userData, password: e.target.value });
          }}
          value={userData?.password}
        />
        {!userData?.password || userData?.password?.length == 0 ? (
          <></>
        ) : credValid ? (
          <CircleCheckBig color="green" />
        ) : (
          <CircleX color="red" />
        )}
        <div className=""></div>
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
