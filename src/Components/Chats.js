import React, { useContext, useEffect, useState } from "react";

const Chats = () => {
  return (
    <div className="chats">
        <div
          className="userChat"
        >
          <img alt="" />
          <div className="userChatInfo">
            <span>Name</span>
            <p>Last Message</p>
          </div>
        </div>
    </div>
  );
};

export default Chats;