import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";

const SearchBar = () => {
  return (
    <MDBCol md="6"  style={{ marginLeft: '10rem' }}>
      <form className="form-inline" >
        <MDBIcon icon="search" />
        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
      </form>
    </MDBCol>
  );
}

export default SearchBar;