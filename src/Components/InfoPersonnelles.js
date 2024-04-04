import React, { useState, useEffect, useContext } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase"; 
import { AuthContext } from "../context/AuthContext"; 
import { Form, FloatingLabel, Button } from 'react-bootstrap';

function InfoPersonnelles() {
  const authContext = useContext(AuthContext); 
  const currentUser = authContext.currentUser; 

  const [userInformation, setUserInformation] = useState({
    displayName: "",
    email: "",
    profession: "",
    photoURL: "",
    documentURL: ""
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (currentUser) { 
          const userDoc = await getDoc(doc(db, "users", currentUser.uid)); 
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUserInformation({
              displayName: userData.displayName || "",
              email: userData.email || "",
              profession: userData.profession || "",
              photoURL: userData.photoURL || "",
              documentURL: userData.documentURL || ""
            });
          } else {
            console.log("Aucune donnée utilisateur trouvée");
          }
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des données utilisateur :", error);
      }
    };

    fetchUserData();
  }, [currentUser]);

  return (
    <div>   
      <h3 style={{margin :'5%', textAlign: 'center'}}> Informations personnelles</h3>
     <Form style={{margin: '2%', width:'80%', fontWeight: 'bold'}}>
      <FloatingLabel controlId="displayName" label="Nom d'utilisateur" className="mb-3" >
        <Form.Control type="text" value={userInformation.displayName} readOnly style={{ backgroundColor: '#ccc'}} />
      </FloatingLabel>
      
      <FloatingLabel controlId="email" label="Email" className="mb-3">
        <Form.Control type="email" value={userInformation.email} readOnly style={{ backgroundColor: '#ccc'}} />
      </FloatingLabel>
      
      <FloatingLabel controlId="profession" label="Profession" className="mb-3">
        <Form.Control type="text" value={userInformation.profession} readOnly style={{ backgroundColor: '#ccc'}} />
      </FloatingLabel>
      
      <FloatingLabel controlId="photoURL" label="URL de la photo" className="mb-3">
        <Form.Control type="text" value={userInformation.photoURL} readOnly style={{ backgroundColor: '#ccc'}}/>
      </FloatingLabel>
      
      <FloatingLabel controlId="documentURL" label="URL du document" className="mb-3">
        <Form.Control type="text" value={userInformation.documentURL} readOnly style={{ backgroundColor: '#ccc'}}/>
      </FloatingLabel>
    </Form></div>

  );
}

export default InfoPersonnelles;
