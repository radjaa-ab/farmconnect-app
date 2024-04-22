import React from "react";
import { useTranslation } from 'react-i18next';
import Navigation from "./Navigation";
import Footer from "./footer"; // Assuming the path is correct
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import i18n from '../i18n';
import { useNavigate } from "react-router-dom";

export default function Panier() {
  const { t } = useTranslation();


  const navigate = useNavigate();
  
  const handlecommander =  () => {
    navigate("/Maain");
  }

  return (
    <div>
      {/* Navigation Bar */}
      <Navigation />

      {/* Content */}
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
                        <p className="mb-0 text-white">{t("You have 4 items in your cart")}</p>
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
                    <MDBRow>
                      <MDBCol lg="5">
                        <MDBCardImage className="rounded" src="https://via.placeholder.com/150" alt="Product 1" />
                      </MDBCol>
                      <MDBCol lg="7">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h5 className="mb-0">{t("Product 1")}</h5>
                            <p className="mb-0 text-muted">{t("$25")}</p>
                          </div>
                          <div>
                            <MDBInput
                              type="number"
                              value="1"
                              min="1"
                              className="mb-0"
                              label={t("Quantity")}
                              disabled
                            />
                          </div>
                        </div>
                      </MDBCol>
                    </MDBRow>

                    {/* Add more products */}
                    <MDBRow className="mt-4">
                      <MDBCol lg="6">
                        <MDBTypography tag="h5">
                          <a href="#!" className="text-body text-decoration-none">
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
                        onClick={handlecommander} // Retirez les parenthèses
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

      {/* Subtotal */}
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol md="6">
            <MDBTypography tag="h5" className="fw-bold mb-3" style={{ color: "#2ecc71" }}>
              {t("Subtotal")}
            </MDBTypography>
            <MDBTypography tag="h5" className="fw-normal mb-0">
              {t("price")}
            </MDBTypography>
          </MDBCol>
          <MDBCol md="6">
            
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      {/* Footer */}
      <Footer />
    </div>
  );
}