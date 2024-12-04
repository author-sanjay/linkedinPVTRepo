import React, { useState } from "react";
import "./UserChatList.css";
import UserChatHeader from "../UserChatHeader/UserChatHeader";
import UserChatListSearchBar from "../UserChatSearchbar/UserChatListSearchBar";
import { UserChatListArchiveComponent } from "../UserChatListArchive/UserChatListArchiveComponent";
import UserChats from "../UserChats/UserChats";
const UserChatList = () => {
  const [archived, setArchived] = useState(false);
  return (
    <div className="userChatListContainer">
      <UserChatHeader />
      <UserChatListSearchBar />
      {archived ? <UserChatListArchiveComponent /> : <></>}
      <UserChats />
    </div>
  );
};

export default UserChatList;
