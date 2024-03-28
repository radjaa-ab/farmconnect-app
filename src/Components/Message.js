import React from "react";

const Message = ({ message }) => {

  return (
    <div
      className={`message`}
    >
      <div className="messageInfo">
        <img
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Message Content</p>
        <img alt="" />
      </div>
    </div>
  );
};

export default Message;