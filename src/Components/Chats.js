import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";

const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    if (currentUser && currentUser.uid) { // Add a check for currentUser existence
      const getChats = async () => {
        const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
          console.log("Chats: doc.data(): ", doc.data());
          setChats(doc.data());
        });

        return () => {
          unsub();
        };
      };

      getChats();
    }
  }, [currentUser]); // Remove currentUser.uid from the dependency array

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div className="chats">
      {Object.entries(chats)?.length === 0 && (
        <p className="no-chats-message">No chats to display yet.</p>
      )}
      {Object.entries(chats)?.sort((a, b) => b[1].date - a[1].date).map((chat) => (
        <div
          className="userChat"
          key={chat[0]}
          onClick={() => handleSelect(chat[1].userInfo)}
        >
          <img src={chat[1].userInfo.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
