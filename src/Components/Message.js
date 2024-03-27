import React, { useState } from 'react';

function Message() {
  return (
    <div className="App">
      <div className="chat-container">
        <div className="chat-messages">
        </div>
        <div className="chat-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={messageInput}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Message;