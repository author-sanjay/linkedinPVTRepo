import React from 'react'
import "./ChatDashboard.css"
import UserStatusList from '../Components/UserStatusList/UserStatusList'
import UserChatList from '../Components/UserChatList/UserChatList'
import UserChatBox from '../Components/UserChatBox/UserChatBox'
const ChatDashboard = () => {
  return (
    <div className='homeContainer'>
        <div className='chatBoxContainer'>
            <UserStatusList/>
            <UserChatList/>
            <UserChatBox/>
        </div>
    </div>
  )
}

export default ChatDashboard