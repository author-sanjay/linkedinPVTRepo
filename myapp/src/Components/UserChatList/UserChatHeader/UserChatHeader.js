import React from 'react'
import "./UserChatHeader.css"
import {MessageSquarePlus,EllipsisVertical} from 'lucide-react'
const UserChatHeader = () => {
  return (
    <div className="userChatListHeaderContainer">
      <div className="userChatListHeaderText">Chats</div>
      <div className="userChatListHeaderIconsContainer">
        <div className="userChatListHeaderSingleIcon">
          <MessageSquarePlus />
        </div>
        <div className="userChatListHeaderSingleIcon">
          <EllipsisVertical />
        </div>
      </div>
    </div>
  );
}

export default UserChatHeader