import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  console.log("ID de l'utilisateur actuel :", currentUser.uid);
  console.log("ID de l'expéditeur du message :", message.senderId);
  if (message.senderId === currentUser.uid) {
    console.log("Ce message appartient à l'utilisateur actuel.");
  } else {
    console.log("Ce message n'appartient pas à l'utilisateur actuel.");
  }

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div className={`message ${message.senderId === currentUser.uid ? "owner" : ""}`} ref={ref}>
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>just now</span>
      </div>
      <div className={`messageContent ${message.img ? "has-image" : ""}`}>
        {message.img && <img src={message.img} alt="" style={{width: '100px'}} />} {/* Affichage de l'image si elle existe */}
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
