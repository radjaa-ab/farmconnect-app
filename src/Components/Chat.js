import React, { useState, useEffect } from 'react';
import Message from './Message';
import SendMessage from './SendMessage'; 
import '../Styles/All.css';

function Chat({ messages, onSendMessage }) { 

    const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    const timerId = setInterval(() => {
      const newMessage = {
        message: 'This is a new message!',
        isUserMessage: false,
        timestamp: new Date().toLocaleTimeString(),
      };
      setChatHistory([...chatHistory, newMessage]);
    }, 5000);
    return () => clearInterval(timerId);
  }, [chatHistory]);
  
  
  return (
    <div className="chat-container">
      {chatHistory.map((message) => (
        <Message key={message.message} {...message} />
      ))}
      <SendMessage onSendMessage={onSendMessage} /> {/* bach yktab messages */}
    </div>
  );
}

export default Chat;
