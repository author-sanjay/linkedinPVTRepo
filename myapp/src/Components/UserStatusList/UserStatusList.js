import React from "react";
import "./UserStatusList.css";
import {
  CircleFadingPlus,
  CirclePlus,
  MessageSquareText,
  Settings,
  Users,
} from "lucide-react";
import UserAvatar from "../UserAvatar/UserAvatar";
const UserStatusList = ({ selectedOption, setSelectedOption }) => {
  return (
    <div className="userStatusListContainer">
      <div className="statusTopList">
        <div
          className={`singleIconContainer ${
            selectedOption === "Chat" ? "selected" : ""
          }`}
          onClick={() => {
            setSelectedOption("Chat");
          }}
        >
          <MessageSquareText />
        </div>
        <div
          className={`singleIconContainer ${
            selectedOption === "Status" ? "selected" : ""
          }`}
          onClick={() => {
            setSelectedOption("Status");
          }}
        >
          <CircleFadingPlus />
        </div>
        <div
          className={`singleIconContainer ${
            selectedOption === "Groups" ? "selected" : ""
          }`}
          onClick={() => {
            setSelectedOption("Groups");
          }}
        >
          <Users />
        </div>
        <div
          className={`singleIconContainer ${
            selectedOption === "Add Chat" ? "selected" : ""
          }`}
          onClick={() => {
            setSelectedOption("Add Chat");
          }}
        >
          <CirclePlus />
        </div>
      </div>
      <div className="statusBottomList">
        <div
          className={`singleIconContainer ${
            selectedOption === "Settings" ? "selected" : ""
          }`}
          onClick={() => {
            setSelectedOption("Settings");
          }}
        >
          <Settings />
        </div>
        <div
          className="singleIconContainer"
          onClick={() => {
            setSelectedOption("Profile");
          }}
        >
          <UserAvatar />
        </div>
      </div>
    </div>
  );
};

export default UserStatusList;
