import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Footer() {
  return (
    <>
      <footer className="col-lg-12 bg-dark text-light">
        <Container className="row p-5">
          <div className="col-lg-5">
            <h3>Chrsitian College of Tanauan</h3>
            <p>
              <i>"Striving for Excellence!</i>
            </p>
            {/* <span>
              <i>"Striving for Excellence"</i>
            </span> */}
            <h5>Contact us</h5>
            <p>Telephone No. (043) 778-54-68</p>
            <p>Fax No. (043) 778-54-69</p>
            <h5>Location</h5>
            <p>J. V. Pagaspas St.,Poblacion,Tanauan City</p>
          </div>
          <div className="col-lg-6">
            <img
              src={require("../img/logo.jpg")}
              alt="logo"
              style={{ float: "right", paddingLeft: "100px" }}
            />
          </div>
        </Container>
      </footer>
    </>
  );
}
export default Footer;
