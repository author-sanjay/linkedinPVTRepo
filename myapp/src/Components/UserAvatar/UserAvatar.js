import React from 'react'
import "./UserAvatar.css"
const UserAvatar = () => {
  return (
    <div className="userAvatarContainer" style={{borderRadius:"20vw"}}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/168/168726.png"
        className="userAvatarImage"
      />
    </div>
  );
}

export default UserAvatar