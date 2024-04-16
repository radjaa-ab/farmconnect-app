import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { ChatContextProvider } from "./context/ChatContext";
import React from 'react';
import { Suspense } from 'react';
import './i18n';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <ChatContextProvider>
      <React.StrictMode>
      <Suspense fallback={<div>Loading....</div>}>
          <App />
      </Suspense>
      </React.StrictMode>
    </ChatContextProvider>
  </AuthContextProvider>
);

const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.getProducts = functions.https.onRequest(async (req, res) => {
  try {
    const productsSnapshot = await admin.firestore().collection("products").get();
    const products = productsSnapshot.docs.map(doc => {
      return { id: doc.id, ...doc.data() };
    });
    return res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products: ", error);
    return res.status(500).json({ error: "Unable to fetch products" });
  }
});
