import React, { useState } from 'react';

function SendMessage({ onSendMessage }) {
  const [messageValue, setMessageValue] = useState('');
  const [file, setFile] = useState(null);

  const handleInputChange = (event) => {
    setMessageValue(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSendMessage = (event) => {
    event.preventDefault(); 
    if (messageValue.trim() !== '' || file) { 
      onSendMessage({ message: messageValue, file }); 
      setMessageValue(''); 
      setFile(null); 
    }
  };

  return (
    <form
      className="send-message-form d-flex align-items-center justify-content-between"
      onSubmit={handleSendMessage}
    >
      <input
        type="text"
        value={messageValue}
        onChange={handleInputChange}
        placeholder="Type your message..."
        className="flex-grow-1" 
      />
      <div className="d-flex">
        <label htmlFor="file-upload">
          <input
            type="file"
            id="file-upload"
            onChange={handleFileChange}
            accept="image/*,.pdf,.docx,.xlsx" 
            style={{ display: 'none' }} 
          />
          <button type="button" className="btn btn-sm btn-outline-secondary">
            Attach
          </button>
        </label>
        <button type="submit" className="btn btn-sm btn-primary">
          Send
        </button>
      </div>
    </form>
  );
}

export default SendMessage;
