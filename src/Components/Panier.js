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
import React from "react";
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

export default function Panier() {
  const { t } = useTranslation();

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#2ecc71" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard>
              <MDBCardBody className="p-4">
                <MDBRow>
                  <MDBCol lg="7">
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
                            <MDBIcon fas icon="angle-down mt-1" />
                          </a>
                        </p>
                      </div>
                    </div>

                    <MDBCard className="mb-3" style={{ backgroundColor: "#fff" }}>
                      <MDBCardBody className="d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-row align-items-center">
                          <div>
                            <MDBCardImage
                              src=" "
                              fluid
                              className="rounded-3"
                              style={{ width: "65px" }}
                              alt={t("Shopping item")}
                            />
                          </div>
                          <div className="ms-3">
                            <MDBTypography tag="h5">{t("Product")}</MDBTypography>
                            <p className="small mb-0">{t("Description")}</p>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                          <div style={{ width: "50px" }}>
                            <MDBTypography tag="h5" className="fw-normal mb-0">
                              2
                            </MDBTypography>
                          </div>
                          <div style={{ width: "80px" }}>
                            <MDBTypography tag="h5" className="mb-0">
                              {t("price")}
                            </MDBTypography>
                          </div>
                          <a href="#!" style={{ color: "#cecece" }}>
                            <MDBIcon fas icon="trash-alt" />
                          </a>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
