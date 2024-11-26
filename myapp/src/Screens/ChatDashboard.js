import React, { useState } from "react";
import "./ChatDashboard.css";
import UserStatusList from "../Components/UserStatusList/UserStatusList";
import UserChatList from "../Components/UserChatList/UserChatList";
import UserChatBox from "../Components/UserChatBox/UserChatBox";
const ChatDashboard = () => {
  const [selectedOption, setSelectedOption] = useState("Chat");
  
  return (
    <div className="homeContainer">
      <div className="chatBoxContainer">
        <UserStatusList
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
        <UserChatList />
        <UserChatBox />
      </div>
    </div>
  );
};

export default ChatDashboard;
