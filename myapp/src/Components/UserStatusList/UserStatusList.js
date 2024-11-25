import React from 'react'
import "./UserStatusList.css"
import { CircleFadingPlus, MessageSquareText, Settings, Users } from "lucide-react"; 
import UserAvatar from '../UserAvatar/UserAvatar';
const UserStatusList = () => {
  return (
    <div className="userStatusListContainer">
      <div className="statusTopList">
        <div className="singleIconContainer">
          <MessageSquareText />
        </div>
        <div className="singleIconContainer">
          <CircleFadingPlus />
        </div>
        <div className="singleIconContainer">
          <Users />
        </div>
      </div>
      <div className="statusBottomList">
        <div className="singleIconContainer">
          <Settings />
        </div>
        <div className="singleIconContainer">
          <UserAvatar />
        </div>
      </div>
    </div>
  );
}

export default UserStatusList