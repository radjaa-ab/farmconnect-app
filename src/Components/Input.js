import React, { useContext, useState, useRef, useEffect } from "react";
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
import { db, storage, messaging } from "../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const messagesEndRef = useRef(null);

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  const handleSend = async () => {
    if (data.chatId) {
      // Envoyer le message
      if (text.trim() !== "") {
        await updateDoc(doc(db, "chats", data.chatId), {
          messages: arrayUnion({
            id: uuid(),
            text: text.trim(),
            senderId: currentUser.uid,
            date: Timestamp.now(),
          }),
        });

        setText(""); // Effacer le champ de texte après l'envoi du message
      }
    } else {
      console.error("chatId is not available");
    }
  };

  useEffect(() => {
    // Faire défiler automatiquement vers le haut
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [data.messages]); // Déclencher l'effet chaque fois que les messages changent

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Ecrire..."
        onChange={(e) => setText(e.target.value)}
        onKeyUp={handleKeyUp} // Gérer l'événement onKeyUp pour détecter la touche "Entrée"
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
      <div ref={messagesEndRef} /> {/* Référence pour faire défiler vers le haut */}
    </div>
  );
};

export default Input;
