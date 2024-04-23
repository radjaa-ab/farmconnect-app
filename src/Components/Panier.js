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
    <div>
      <input
        type="number"
        value={quantity}
        min="1"
        className="mb-0"
        disabled
      />
      <button onClick={incrementQuantity}>Increment</button>
    </div>
  );
};

export default function Panier() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleCommander = () => {
    navigate("/Maain");
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
    navigate("/Products");
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
                      <a href="#!" className="text-body text-decoration-none">
                        <MDBIcon fas icon="long-arrow-alt-left me-2" /> {t("Continue shopping")}
                      </a>
                   </MDBTypography>

                    <hr className="my-4" style={{ borderColor: "#fff" }} />

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-1 text-white">{t("Shopping cart")}</p>
                        <p className="mb-0 text-white">{t("You have")} {cart.length} {t("items in your cart")}</p>
                      </div>
                      <div>
                        <p>
                          <span className="text-muted">{t("Sort by:")}</span>
                          <a href="#!" className="text-white">
                            {t("price")}
                            <MDBIcon fas icon="angle-down" className="ms-2" />
                          </a>
                        </p>
                      </div>
                    </div>

                    {/* Cart items */}
                    {cart.map((product) => (
                      <MDBRow key={product.id} className="mb-3">
                        <MDBCol lg="5">
                          <MDBCardImage className="rounded" src={apple} alt={product.name} style={{ maxWidth: '200px' }} />
                        </MDBCol>
                        <MDBCol lg="7">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h5 className="mb-0">{product.name}</h5>
                              <p className="mb-0 text-muted">{product.price} Da</p>
                            </div>
                            <div>
                              {/* Pass initialQuantity and onQuantityChange to QuantityInput component */}
                              <QuantityInput initialQuantity={product.quantity} onQuantityChange={(newQuantity) => handleQuantityChange(product.id, newQuantity)} />
                            </div>
                          </div>
                        </MDBCol>
                      </MDBRow>
                    ))}

                    {/* Add more products */}
                    <MDBRow className="mt-4">
                      <MDBCol lg="6">
                        <MDBTypography tag="h5">
                          <a href="#!" className="text-body text-decoration-none" onClick={addProduct}>
                            <MDBIcon fas icon="long-arrow-alt-left me-2" /> {t("Add more products")}
                          </a>
                        </MDBTypography>
                      </MDBCol>
                      <MDBCol lg="6">
                        <MDBBtn
                          className="mb-4"
                          color="success"
                          size="md"
                          waves="light"
                          hover
                          wavesEffect="on-hover"
                          onClick={handleCommander}
                        >
                          {t("Commander")}
                        </MDBBtn>
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      {/* Render the Checkout component */}
      <Checkout />

      {/* Subtotal */}
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol md="6">
            <MDBTypography tag="h5" className="fw-bold mb-3" style={{ color: "#2ecc71" }}>
              {t("Subtotal")}
            </MDBTypography>
            <MDBTypography tag="h5" className="fw-normal mb-0">
              {subtotal} Da
            </MDBTypography>
          </MDBCol>
          <MDBCol md="6">
            {/* Additional content for the right column */}
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <Footer />
    </div>
  );
}
