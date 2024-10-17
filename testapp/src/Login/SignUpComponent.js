import { CircleCheckBig, CircleX } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useUser } from "../Context/UserContext";

const SignUpComponent = ({ userData, setUserData }) => {
  const { userObject } = useUser();
  const [validator, setValidator] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  });
  const [apiResult, setApiResult] = useState(null);
  const [loading, setLoading] = useState(true);
  function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  function validatePassword(password) {
    const passwordPattern =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
  }

  function apiCall() {
    // Wait for API call to complete
    setApiResult("cjhjads");
  }

  useEffect(() => {
    if (apiResult) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [apiResult]);
  useEffect(() => {
    setValidator((prevValidator) => ({
      ...prevValidator,
      email: validateEmail(userData.email),
      password: validatePassword(userData.passWord),
      confirmPassword:
        userData?.passWord?.length > 0 &&
        userData?.userConfirmPassword?.length > 0 &&
        userData.passWord === userData.userConfirmPassword,
    }));
  }, [userData]);
  return loading ? (
    <div className="">Loading</div>
  ) : (
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
          height: "25%",
          borderRadius: "2vw",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "5%",
        }}
      >
        <input
          type="text"
          style={{
            width: "80%",
            height: "80%",
            borderRadius: "2vw",
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

        {userData?.email && validator?.email ? (
          <CircleCheckBig color="green" />
        ) : userData?.email && !validator?.email ? (
          <CircleX color="red" />
        ) : (
          <></>
        )}
      </div>
      <div
        className=""
        style={{
          width: "100%",
          height: "25%",
          borderRadius: "2vw",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: "5%",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          style={{
            width: "80%",
            height: "80%",
            borderRadius: "2vw",
            paddingLeft: "5%",
            paddingRight: "5%",
            outline: "none",
          }}
          placeholder="Password"
          value={userData?.userPassword}
          onChange={(e) => {
            setUserData({ ...userData, passWord: e.target.value });
          }}
        />
        {userData.password && validator.password ? (
          <CircleCheckBig color="green" />
        ) : userData.password && !validator.password ? (
          <CircleX color="red" />
        ) : (
          <></>
        )}
      </div>
      <div
        className=""
        style={{
          width: "100%",
          height: "25%",
          borderRadius: "2vw",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "row",
          marginBottom: "5%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          style={{
            width: "80%",
            height: "80%",
            borderRadius: "2vw",
            paddingLeft: "5%",
            paddingRight: "5%",
            outline: "none",
          }}
          placeholder="Confirm Password"
          onChange={(e) => {
            setUserData({ ...userData, userConfirmPassword: e.target.value });
          }}
        />
        {userData.password && validator.confirmPassword ? (
          <CircleCheckBig color="green" />
        ) : userData.password && !validator.confirmPassword ? (
          <CircleX color="red" />
        ) : (
          <></>
        )}
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
        onClick={() => {
          setUserData({ ...userData, login: false });
        }}
      >
        <span>SignUp</span>
      </div>
    </div>
  );
};

export default SignUpComponent;
