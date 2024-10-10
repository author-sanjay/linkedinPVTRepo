import React from "react";
import "./Login.css";
const LoginHeader = () => {
  var a="";
  const h='';
  let i=0;
  
  const arr = [
    {
      icon: "https://cdn-icons-png.flaticon.com/128/2704/2704034.png",
      title: "Articles",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/1077/1077114.png",
      title: "Peoples",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/4922/4922073.png",
      title: "Blogs",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/4185/4185218.png",
      title: "Learning",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/17783/17783640.png",
      title: "Connect",
    },
  ];
  return (
    <div className="loginHeaderContainer">
      <div className="loginHeaderLogoContainer">
        <img
          src="https://download.logo.wine/logo/LinkedIn/LinkedIn-Logo.wine.png"
          className="logoImage"
        />
      </div>
      <div className="loginHeaderButtonsContainer">
        {
        arr.map((item) => {
          return (
            <div className="singleIconContainer">
              <img src={item.icon} className="singleIconImage" />
              <div className="">{item.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LoginHeader;
