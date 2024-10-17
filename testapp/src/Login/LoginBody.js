import React, { useEffect, useState } from "react";
import "./Login.css";
import LoginComponent from "./LoginComponent";
import SignUpComponent from "./SignUpComponent";
const LoginBody = ({ email, setEmailAddress }) => {
  const [userData, setUserData] = useState({ login: true });
  // useEffect(() => {}, [userData]);
  return (
    <div
      className=""
      style={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div
        className=""
        style={{
          backgroundColor: "#B7C0EE",
          width: "50%",
          borderRadius: "2vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "70%",
        }}
      >
        <div
          className=""
          style={{ marginBottom: "5%", fontSize: "3vh", fontWeight: "lighter" }}
        >
          {userData.login ? "Login Up" : "Signup"}
        </div>
        {userData.login ? (
          <div className="" style={{ width: "50%", height: "40%" }}>
            <LoginComponent userData={userData} setUserData={setUserData} />
          </div>
        ) : (
          <div className="" style={{ width: "50%", height: "40%" }}>
            <SignUpComponent userData={userData} setUserData={setUserData} />
          </div>
        )}

        <div
          className=""
          style={{
            position: "absolute",
            bottom: "20%",
            cursor: "pointer",
            userSelect: "none",
          }}
          onClick={() => {
            setUserData({ ...userData, login: !userData.login });
          }}
        >
          {userData.login ? "Signup" : "Login"}
        </div>
      </div>
    </div>
  );
};

export default LoginBody;
