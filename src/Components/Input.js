import React, { useContext, useState } from "react";
import Img from "../img/img.png";
import Attach from "../img/attach.png";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { getMessaging, sendMessage } from "firebase/messaging";


const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  const handleSend = async () => {
    if (data.chatId) {
      if (img) {
        const storageRef = ref(storage, uuid());
  
        const uploadTask = uploadBytesResumable(storageRef, img);
  
        uploadTask.on(
          (error) => {
            //TODO:Handle Error
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
  
            const messaging = getMessaging();
            sendMessage(messaging, {
              title: "Nouveau message",
              body: `Vous avez reçu un nouveau message de ${currentUser.displayName}`,
              data: {
                click_action: "http://localhost:3000/chat/${data.chatId}",
              },
            });
          }
        );
      } else {
        await updateDoc(doc(db, "chats", data.chatId), {
          messages: arrayUnion({
            id: uuid(),
            text,
            senderId: currentUser.uid,
            date: Timestamp.now(),
          }),
        });
  
        const messaging = getMessaging();
        sendMessage(messaging, {
          title: "Nouveau message",
          body: `Vous avez reçu un nouveau message de ${currentUser.displayName}`,
          data: {
            click_action: "http://localhost:3000/chat/${data.chatId}",
          },
        });
      }
  
      await updateDoc(doc(db, "userChats", currentUser.uid), {
        [data.chatId + ".lastMessage"]: {
          text,
        },
        [data.chatId + ".date"]: serverTimestamp(),
      });
  
      await updateDoc(doc(db, "userChats", data.user.uid), {
        [data.chatId + ".lastMessage"]: {
          text,
        },
        [data.chatId + ".date"]: serverTimestamp(),
      });
  
      setText("");
      setImg(null);
    } else {
      console.error("chatId is not available");
    }
  };


  return (
    <div className="input">
      <input
        type="text"
        placeholder="Ecrire..."
        onChange={(e) => setText(e.target.value)}
        onKeyUp={handleKeyUp}
        value={text}
      />
      <div className="send">
        <img src={Attach} alt="" />
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button onClick={handleSend}>Envoyer</button>
      </div>
    </div>
  );
};

export default Input;