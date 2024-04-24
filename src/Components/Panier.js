import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./footer";
import Checkout from "./Checkout"; // Import the Checkout component
import apple from '../Images/apple.png';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

// Define the QuantityInput component separately
const QuantityInput = ({ initialQuantity, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(initialQuantity); // Initialize quantity state

  // Function to increment quantity
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  useEffect(() => {
    onQuantityChange(quantity);
  }, [quantity, onQuantityChange]);

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type="number"
        value={quantity}
        min="1"
        className="mb-0"
        disabled
        style={{ width: '50px', marginRight: '10px' }}
      />
      <button
        onClick={incrementQuantity}
        style={{
          backgroundColor: '#2ecc71',
          color: '#fff',
          border: 'none',
          padding: '5px 10px',
          borderRadius: '5px',
          cursor: 'pointer',
          marginRight: '10px' // Add some space between the button and the input
        }}
      >
        Increment
      </button>
      <MDBIcon icon="shoppingCart" style={{ fontSize: '2rem', color: '#2ecc71' }} />
    </div>
  );
};

export default function Panier() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleCommander = () => {
    navigate("/Maain"); // Navigate to the Products page
  }

  const [cart, setCart] = useState([
    { id: 1, name: "Product 1", price: 25, quantity: 1 },
    { id: 2, name: "Product 2", price: 30, quantity: 1 },
    // Add more items to the cart as needed
  ]);

  // State to hold subtotal
  const [subtotal, setSubtotal] = useState(0);

  // Function to update quantity in cart
  const handleQuantityChange = (productId, newQuantity) => {
    setCart(cart.map(item => item.id === productId ? { ...item, quantity: newQuantity } : item));
  };

  // Function to navigate to Products page
  const addProduct = () => {
    navigate("/Maain");
  };

  useEffect(() => {
    // Calculate subtotal whenever cart changes
    let newSubtotal = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
    setSubtotal(newSubtotal);
  }, [cart]);

  return (
    <div>
      <Navigation />
      <MDBContainer className="py-5">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="7">
            <MDBCard className="border-0 shadow rounded-3" style={{ backgroundColor: "#fff" }}>
              <MDBCardBody className="p-4">
                <MDBRow>
                  <MDBCol>
                  <MDBTypography tag="h5">
                    <a href="/Products" className="text-body" style={{ textDecoration: 'none', color: '#2ecc71' }}>
                      <MDBIcon fas icon="long-arrow-alt-left me-2" />
                      Retour à la liste des produits
                    </a>
                  </MDBTypography>
                  </MDBCol>
                </MDBRow>
                <hr className="my-4" />
                <MDBRow className="my-4">
                  {cart.map(item => (
                    <MDBCol key={item.id} lg="12">
                      <MDBRow className="my-3">
                        <MDBCol lg="2">
                          <MDBCardImage
                            src={apple}
                            alt="..."
                            className="rounded"
                            style={{ height: "60px", width: "60px" }}
                          />
                        </MDBCol>
                        <MDBCol lg="7">
                          <h5 className="mb-0">{item.name}</h5>
                          <p className="mb-0">
                            <small>Price: {item.price} Da</small>
                          </p>
                        </MDBCol>
                        <MDBCol lg="3">
                          <QuantityInput initialQuantity={item.quantity} onQuantityChange={(newQuantity) => handleQuantityChange(item.id, newQuantity)} />
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                  ))}
                </MDBRow>
                <hr className="my-4" />
                <MDBRow className="my-4">
                  <MDBCol>
                    <p className="mb-0">Subtotal: {subtotal} Da</p>
                  </MDBCol>
                </MDBRow>
                <hr className="my-4" />
                <MDBRow className="my-4">
                  <MDBCol>
                    <MDBBtn
                      onClick={handleCommander}
                      className="btn-lg w-100"
                      style={{ backgroundColor: "#2ecc71", color: "#fff" }}
                    >
                      Commander
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      {/* Render the Checkout component */}
      <Checkout />
      <Footer />
    </div>
  );
}