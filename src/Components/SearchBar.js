import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



const SearchBar = ({ placeholderText }) => {
  return (
    <MDBCol md="4"  style={{ width: '500px', marginTop: '8px' }}>
      <form className="form-inline" >
        <Row>
          <Col>
            <MDBIcon icon="search" />
          </Col>
          <Col><input className="form-control form-control-sm ml-3 w-75" type="text" placeholder={placeholderText} aria-label="Search" /></Col>
        </Row>
      </form>
    </MDBCol>
  );
}

export default SearchBar;