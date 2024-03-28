import React from 'react';
import classNames from 'classnames';
import '../Styles/All.css';

function Message({ message, isUserMessage, timestamp }) {
  const messageClassNames = classNames(
    'message',
    isUserMessage ? 'message-user' : 'message-other'
  );

  return (
    <div className={messageClassNames}>
      <p>{message}</p>
      {timestamp && <span className="message-timestamp">{timestamp}</span>}
    </div>
  );
}

export default Message;
