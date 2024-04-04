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
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null); // Nouveau state pour gérer l'image sélectionnée

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const messagesEndRef = useRef(null);

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleImageChange = (event) => { 
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  };

  const handleSend = async () => {
    if (data.chatId) {
      if (text.trim() !== "" || file || image) {
        const messageData = {
          id: uuid(),
          text: text.trim(),
          senderId: currentUser.uid,
          date: Timestamp.now(),
        };
  
        if (file) {
          const fileRef = ref(storage, `files/${file.name}`);
          await uploadBytesResumable(fileRef, file);
          const downloadURL = await getDownloadURL(fileRef);
          messageData.fileURL = downloadURL;
        }
  
        if (image) {
          const imageRef = ref(storage, `images/${image.name}`);
          await uploadBytesResumable(imageRef, image);
          const downloadURL = await getDownloadURL(imageRef);
          messageData.imageURL = downloadURL;
        }
  
        await updateDoc(doc(db, "chats", data.chatId), {
          messages: arrayUnion(messageData),
        });
  
        setText("");
        setFile(null);
        setImage(null);
      }
    } else {
      console.error("chatId is not available");
    }
  };
  

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [data.messages]);

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
        <label htmlFor="fileInput">
          <img src={Attach} alt="Attacher" />
        </label>
        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <label htmlFor="imageInput">
          <img src={Img} alt="Image" />
        </label>
        <input
          type="file"
          id="imageInput"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
        <button onClick={handleSend}>Envoyer</button>
      </div>
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Input;
